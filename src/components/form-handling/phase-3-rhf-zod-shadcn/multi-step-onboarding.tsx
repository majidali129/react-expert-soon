import {
    User,
    Briefcase,
    Shield,
    CheckCircle2,
    ChevronRight,
    ChevronLeft,
    Loader2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    step1Schema,
    PersonalInfoStep,
    type Step1Types,
} from "./steps/personal-info-step";
import {
    ProfessionalSetupStep,
    step2Schema,
    type Step2Types,
} from "./steps/professional-setup-step";
import {
    step3Schema,
    VerificationStep,
    type Step3Types,
} from "./steps/verification-step";
import { ReviewStep } from "./steps/review-step";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const steps = [
    { id: 1, title: "Personal Info", icon: User },
    { id: 2, title: "Professional", icon: Briefcase },
    { id: 3, title: "Verification", icon: Shield },
    { id: 4, title: "Review", icon: CheckCircle2 },
];

export type StepsFormData = Step1Types & Step2Types & Step3Types;
const stepsCombinedSchema = step1Schema
    .extend(step2Schema.shape)
    .extend(step3Schema.shape);
const combinedDefaults: StepsFormData = {
    username: "",
    displayName: "",
    email: "",
    phone: {
        countryCode: "",
        number: "",
    },
    address: {
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
    },
    categoryInfo: {
        category: "development",
        githubProfile: "",
        techStack: [],
    },
    services: [{ name: "", description: "", price: 5, deliveryDays: 1 }],
    languageInfo: {
        language: "",
        proficiency: "basic",
    },
    governmentId: null,
    videoUrl: "",
    socialLinks: {
        dribbble: "",
        github: "",
        linkedin: "",
        twitter: "",
    },
    payment: {
        method: "paypal",
        paypalEmail: "",
    },
};
const stepFields: Record<number, (keyof StepsFormData)[]> = {
    1: ["username", "displayName", "email", "phone", "address"],
    2: ["categoryInfo", "services", "languageInfo"],
    3: ["governmentId", "videoUrl", "socialLinks", "payment"],
};
export const MultiStepOnboarding = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const methods = useForm<StepsFormData>({
        resolver: zodResolver(stepsCombinedSchema),
        defaultValues: combinedDefaults,
        mode: "onChange",
    });

    const { getValues, watch } = methods;

    console.log(getValues());
    console.log(watch());
    console.log(stepFields);

    const handleNext = async () => {
        const fieldToValidate = stepFields[currentStep];
        console.log(fieldToValidate);
        const isStepValid = await methods.trigger(fieldToValidate);
        if (isStepValid) {
            console.log(`Data after step ${currentStep}:`, getValues());
            if (currentStep === steps.length) return;
            setCurrentStep((prev) => prev + 1);
        } else return;
    };

    const handlePrevStep = () => {
        if (currentStep === 1) return;
        setCurrentStep((prev) => prev - 1);
    };

    const onSubmit = (data: StepsFormData) => {
        console.log(data);
    };
    console.log(methods.formState.errors);
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <PersonalInfoStep />;
            case 2:
                return <ProfessionalSetupStep />;
            case 3:
                return <VerificationStep />;
            case 4:
                return <ReviewStep />;
            default:
                return null;
        }
    };

    console.log(currentStep);

    return (
        <div className="space-y-8">
            {/* Progress Steps */}
            <div className="relative">
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted">
                    <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{
                            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                        }}
                    />
                </div>

                <div className="relative flex justify-between">
                    {steps.map((step) => (
                        <button
                            key={step.id}
                            type="button"
                            className={cn(
                                "flex flex-col items-center gap-2 not-disabled:cursor-pointer",
                                step.id <= currentStep
                                    ? "text-primary"
                                    : "text-muted-foreground",
                            )}
                            // TODO: Allow clicking to go back to previous steps
                            onClick={() =>
                                step.id < currentStep && setCurrentStep(step.id)
                            }
                            disabled={step.id > currentStep}
                        >
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center border-2 bg-background transition-colors",
                                    step.id < currentStep &&
                                        "bg-primary border-primary text-primary-foreground",
                                    step.id === currentStep &&
                                        "border-primary bg-teal-600",
                                    step.id > currentStep && "border-muted",
                                )}
                            >
                                {step.id < currentStep ? (
                                    <CheckCircle2 className="h-5 w-5" />
                                ) : (
                                    <step.icon className="h-5 w-5" />
                                )}
                            </div>
                            <span className="text-xs font-medium hidden sm:block">
                                {step.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Form Content */}
            {/* TODO: Wrap with FormProvider */}
            <FormProvider {...methods}>
                <Card>
                    <CardContent className="pt-6">
                        {/* TODO: Wrap with form element */}
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            {renderStep()}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8 pt-6 border-t">
                                <Button
                                    type="button"
                                    variant="outline"
                                    disabled={currentStep === 1}
                                    onClick={handlePrevStep}
                                >
                                    <ChevronLeft className="h-4 w-4 mr-2" />
                                    Previous
                                </Button>

                                {currentStep < 4 ? (
                                    <Button type="button" onClick={handleNext}>
                                        Next Step
                                        <ChevronRight className="h-4 w-4 ml-2" />
                                    </Button>
                                ) : (
                                    <Button type="submit">
                                        {currentStep === 4 ? (
                                            <>
                                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            "Complete Registration"
                                        )}
                                    </Button>
                                )}
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </FormProvider>

            {/* Debug Panel */}
            <Card className="bg-muted/50">
                <CardContent className="pt-6">
                    <p className="text-xs font-mono text-muted-foreground mb-2">
                        Debug: Full Form Data & Errors
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs font-medium mb-1">Form Values:</p>
                            <pre className="text-xs overflow-auto max-h-40 p-2 bg-background rounded">
                                {JSON.stringify(watch(), null, 2)}
                            </pre>
                        </div>
                        <div>
                            <p className="text-xs font-medium mb-1">Errors:</p>
                            <pre className="text-xs overflow-auto max-h-40 p-2 bg-background rounded text-destructive">
                                {/* {JSON.stringify(methods.formState.errors, null, 2)} */}
                            </pre>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
