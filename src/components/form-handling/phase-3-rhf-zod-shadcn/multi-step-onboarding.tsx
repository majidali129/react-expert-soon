"use client";

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
import { PersonalInfoStep } from "./steps/personal-info-step";
import { ProfessionalSetupStep } from "./steps/professional-setup-step";
import { VerificationStep } from "./steps/verification-step";
import { ReviewStep } from "./steps/review-step";

/**
 * ============================================
 * PHASE 3: MULTI-STEP ONBOARDING FORM
 * ============================================
 *
 * YOUR TASKS:
 *
 * 1. ZOD SCHEMA SETUP:
 *    - Create schema for each step
 *    - Use z.object, z.array, z.enum, z.union
 *    - Add refinements for cross-field validation
 *    - Use transforms for data cleanup
 *
 * 2. ZODRESOLVER INTEGRATION:
 *    - Connect Zod schema to React Hook Form
 *    - Handle step-specific validation
 *    - Type inference from schema
 *
 * 3. MULTI-STEP NAVIGATION:
 *    - Validate current step before proceeding
 *    - Preserve data when navigating back
 *    - Allow jumping to previous steps
 *
 * 4. SHADCN FORM COMPONENTS:
 *    - FormField, FormItem, FormLabel, FormControl, FormMessage
 *    - Proper error display
 *    - Accessible form structure
 *
 * 5. ADVANCED ZOD PATTERNS:
 *    - Discriminated unions (different fields per category)
 *    - Async validation (username check)
 *    - Conditional validation
 *    - Nested object validation
 *
 * SCHEMA EXAMPLES:
 *
 * // Basic schema
 * const step1Schema = z.object({
 *   username: z.string().min(3).max(20),
 *   email: z.string().email(),
 *   phone: z.string().regex(/^\+?[1-9]\d{1,14}$/),
 *   address: z.object({
 *     street: z.string().min(1),
 *     city: z.string().min(1),
 *     zip: z.string().min(5),
 *   }),
 * })
 *
 * // With refinement
 * const passwordSchema = z.object({
 *   password: z.string().min(8),
 *   confirmPassword: z.string(),
 * }).refine((data) => data.password === data.confirmPassword, {
 *   message: "Passwords don't match",
 *   path: ["confirmPassword"],
 * })
 *
 * // Discriminated union
 * const categorySchema = z.discriminatedUnion("category", [
 *   z.object({ category: z.literal("design"), figmaUrl: z.string().url() }),
 *   z.object({ category: z.literal("development"), githubUrl: z.string().url() }),
 * ])
 *
 * // Array with validation
 * const servicesSchema = z.array(
 *   z.object({
 *     name: z.string().min(1),
 *     price: z.number().min(5),
 *   })
 * ).min(1, "Add at least one service")
 *
 * // Async validation (use superRefine)
 * const usernameSchema = z.string().superRefine(async (val, ctx) => {
 *   const isAvailable = await checkUsername(val)
 *   if (!isAvailable) {
 *     ctx.addIssue({ code: "custom", message: "Username taken" })
 *   }
 * })
 */

const steps = [
    { id: 1, title: "Personal Info", icon: User },
    { id: 2, title: "Professional", icon: Briefcase },
    { id: 3, title: "Verification", icon: Shield },
    { id: 4, title: "Review", icon: CheckCircle2 },
];

export const MultiStepOnboarding = () => {
    // TODO: Setup state for current step
    // const [currentStep, setCurrentStep] = useState(1)
    const currentStep: number = 1; // Placeholder

    // TODO: Setup useForm with zodResolver
    // const form = useForm<z.infer<typeof fullSchema>>({
    //   resolver: zodResolver(currentStepSchema),
    //   defaultValues: {...}
    // })

    // TODO: Create combined schema or per-step schemas
    // const step1Schema = z.object({...})
    // const step2Schema = z.object({...})
    // const step3Schema = z.object({...})

    // TODO: Handle step navigation
    // const nextStep = async () => {
    //   const isValid = await form.trigger()
    //   if (isValid) setCurrentStep(prev => prev + 1)
    // }
    // const prevStep = () => setCurrentStep(prev => prev - 1)

    // TODO: Handle final submission
    // const onSubmit = async (data) => {...}

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
                                "flex flex-col items-center gap-2",
                                step.id <= currentStep
                                    ? "text-primary"
                                    : "text-muted-foreground",
                            )}
                            // TODO: Allow clicking to go back to previous steps
                            // onClick={() => step.id < currentStep && setCurrentStep(step.id)}
                            disabled={step.id > currentStep}
                        >
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center border-2 bg-background transition-colors",
                                    step.id < currentStep &&
                                        "bg-primary border-primary text-primary-foreground",
                                    step.id === currentStep && "border-primary",
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
            {/* <FormProvider {...form}> */}
            <Card>
                <CardContent className="pt-6">
                    {/* TODO: Wrap with form element */}
                    {/* <form onSubmit={form.handleSubmit(onSubmit)}> */}
                    {renderStep()}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t">
                        <Button
                            type="button"
                            variant="outline"
                            disabled={currentStep === 1}
                            // TODO: onClick={prevStep}
                        >
                            <ChevronLeft className="h-4 w-4 mr-2" />
                            Previous
                        </Button>

                        {currentStep < 4 ? (
                            <Button
                                type="button"
                                // TODO: onClick={nextStep}
                            >
                                Next Step
                                <ChevronRight className="h-4 w-4 ml-2" />
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                // TODO: disabled={form.formState.isSubmitting}
                            >
                                {/* TODO: Show loading state */}
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
                    {/* </form> */}
                </CardContent>
            </Card>
            {/* </FormProvider> */}

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
                                {/* TODO: JSON.stringify(form.watch(), null, 2) */}
                                {`{}`}
                            </pre>
                        </div>
                        <div>
                            <p className="text-xs font-medium mb-1">Errors:</p>
                            <pre className="text-xs overflow-auto max-h-40 p-2 bg-background rounded text-destructive">
                                {/* TODO: JSON.stringify(form.formState.errors, null, 2) */}
                                {`{}`}
                            </pre>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
