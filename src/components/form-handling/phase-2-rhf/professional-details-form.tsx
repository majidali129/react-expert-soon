import {
    Briefcase,
    DollarSign,
    Clock,
    Plus,
    Trash2,
    Building2,
    Calendar,
    LinkIcon,
    GripVertical,
    SpaceIcon,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
    Controller,
    FormProvider,
    useFieldArray,
    useForm,
    useFormContext,
    useWatch,
    type FieldErrors,
    type SubmitHandler,
    type UseFormRegister,
} from "react-hook-form";
import { useState } from "react";

type Inputs = {
    title: string;
    hourlyRate: string;
    experienceLevel: string;
    availability: string;
    workExperience: Array<{
        company: string;
        role: string;
        startDate: string;
        endDate: string;
        currentlyWorking: boolean;
    }>;
    skills: Array<string>;
    portfolioUrl: string;
};
export function ProfessionalDetailsForm() {
    const methos = useForm<Inputs>({
        defaultValues: {
            title: "",
            hourlyRate: "",
            experienceLevel: "",
            availability: "",
            workExperience: [
                {
                    company: "",
                    role: "",
                    startDate: "",
                    endDate: "",
                    currentlyWorking: false,
                },
            ],
            skills: [],
            portfolioUrl: "",
        },
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
        control,
    } = methos;

    const {
        fields: workExperienceFields,
        remove,
        append,
    } = useFieldArray({
        control,
        name: "workExperience",
    });

    // TODO: Setup useWatch for conditional rendering
    const selectedExperience = useWatch({ control, name: "experienceLevel" });

    const experienceLevels = [
        { value: "junior", label: "Junior (0-2 years)", suggestedRate: "15-30" },
        { value: "mid", label: "Mid-Level (2-5 years)", suggestedRate: "30-60" },
        { value: "senior", label: "Senior (5+ years)", suggestedRate: "60-150" },
    ];

    const suggestionRange = (() => {
        const suggestion = experienceLevels.find(
            (level) => level.value === selectedExperience,
        )?.suggestedRate;
        if (!suggestion) return null;
        const [min, max] = suggestion.split("-").map((num) => +num);
        return { min, max };
    })();

    const availabilityOptions = [
        { value: "fulltime", label: "Full-time (40+ hrs/week)" },
        { value: "parttime", label: "Part-time (20-40 hrs/week)" },
        { value: "freelance", label: "Freelance (< 20 hrs/week)" },
    ];

    const skillOptions = [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "UI/UX Design",
        "Figma",
        "GraphQL",
        "PostgreSQL",
    ];

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    const selectedSkills = watch("skills");
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Professional Details
                </CardTitle>
                <CardDescription>
                    Tell us about your professional background and expertise
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* TODO: Wrap with handleSubmit */}
                <FormProvider {...methos}>
                    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                        {/* Section 1: Basic Professional Info */}
                        <div className="space-y-4">
                            <h3 className="font-medium">Basic Information</h3>

                            {/* Professional Title */}
                            <div className="space-y-2">
                                <Label htmlFor="title">
                                    Professional Title{" "}
                                    <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    {...register("title", {
                                        required: "Title is required",
                                    })}
                                    id="title"
                                    placeholder="e.g., Senior React Developer"
                                />

                                {errors.title && (
                                    <p className="text-sm text-destructive">
                                        {errors.title.message}
                                    </p>
                                )}
                            </div>

                            {/* Experience Level */}
                            <div className="space-y-2">
                                <Label htmlFor="experience-level">
                                    Experience Level{" "}
                                    <span className="text-destructive">*</span>
                                </Label>
                                <Controller
                                    name="experienceLevel"
                                    control={control}
                                    rules={{ required: "Please select an experience" }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            onValueChange={(value) =>
                                                field.onChange(value)
                                            }
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select your experience level" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {experienceLevels.map((level) => (
                                                    <SelectItem
                                                        key={level.value}
                                                        value={level.value}
                                                    >
                                                        {level.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />

                                {errors.experienceLevel && (
                                    <p className="text-sm text-destructive">
                                        {errors.experienceLevel.message}
                                    </p>
                                )}
                            </div>

                            {/* Hourly Rate - with suggestion based on experience */}
                            <div className="space-y-2">
                                <Label htmlFor="hourlyRate">
                                    Hourly Rate (USD){" "}
                                    <span className="text-destructive">*</span>
                                </Label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="hourlyRate"
                                        type="number"
                                        placeholder="50"
                                        className="pl-10"
                                        {...register("hourlyRate", {
                                            required: "Please add your rate here",
                                            ...(suggestionRange && {
                                                min: {
                                                    value: suggestionRange.min,
                                                    message: `Rate can't be below ${suggestionRange.min}`,
                                                },
                                                max: {
                                                    value: suggestionRange.max,
                                                    message: `Rate can't exceed ${suggestionRange.max}`,
                                                },
                                            }),
                                        })}
                                    />
                                </div>
                                {errors.hourlyRate && (
                                    <p className="text-sm text-destructive">
                                        {errors.hourlyRate.message}
                                    </p>
                                )}
                                {/* TODO: Show suggestion based on watched experience level */}
                                {selectedExperience && suggestionRange && (
                                    <p className="text-sm text-muted-foreground">
                                        Suggested rate for {selectedExperience}: $
                                        {suggestionRange.min}-{suggestionRange.max}
                                    </p>
                                )}
                                {!selectedExperience && (
                                    <p className="text-sm text-muted-foreground">
                                        Select experience level to see suggested rates
                                    </p>
                                )}
                            </div>

                            {/* Availability */}
                            <div className="space-y-3">
                                <Label>
                                    Availability{" "}
                                    <span className="text-destructive">*</span>
                                </Label>
                                <div className="grid gap-2">
                                    {availabilityOptions.map((option) => (
                                        <label
                                            key={option.value}
                                            className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                                        >
                                            <input
                                                type="radio"
                                                id="availability"
                                                value={option.value}
                                                className="h-4 w-4"
                                                {...register("availability", {
                                                    required:
                                                        "Please add your available hours",
                                                })}
                                            />
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-muted-foreground" />
                                                <span>{option.label}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                                {errors.availability && (
                                    <p className="text-sm text-destructive">
                                        {errors.availability.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <Separator />

                        {/* Section 2: Work Experience - DYNAMIC FIELDS */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium">Work Experience</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Add your relevant work history
                                    </p>
                                </div>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                        append({
                                            company: "",
                                            role: "",
                                            startDate: "",
                                            endDate: "",
                                            currentlyWorking: false,
                                        })
                                    }
                                >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Experience
                                </Button>
                            </div>

                            {/* Work Experience Items */}
                            <div className="space-y-4">
                                {/* TODO: Replace with fields.map() from useFieldArray */}
                                {workExperienceFields.map((field, index) => (
                                    // <div
                                    //     key={field.id}
                                    //     className="p-4 border rounded-lg space-y-4 relative group"
                                    // >
                                    //     {/* Drag Handle - for future reordering feature */}
                                    //     <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                                    //         <GripVertical className="h-4 w-4 text-muted-foreground" />
                                    //     </div>
                                    //     {/* Remove Button */}
                                    //     <Button
                                    //         type="button"
                                    //         variant="ghost"
                                    //         size="icon"
                                    //         className="absolute right-2 top-2 h-8 w-8 text-muted-foreground hover:text-destructive"
                                    //         onClick={() => remove(index)}
                                    //     >
                                    //         <Trash2 className="h-4 w-4" />
                                    //     </Button>
                                    //     <div className="grid md:grid-cols-2 gap-4 pt-2">
                                    //         {/* Company Name */}
                                    //         <div className="space-y-2">
                                    //             <Label htmlFor={`company-${index}`}>
                                    //                 Company
                                    //             </Label>
                                    //             <div className="relative">
                                    //                 <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    //                 <Input
                                    //                     id={`company-${index}`}
                                    //                     placeholder="Company name"
                                    //                     className="pl-10"
                                    //                     {...register(
                                    //                         `workExperience.${index}.company`,
                                    //                         {
                                    //                             required:
                                    //                                 "Please add company",
                                    //                         },
                                    //                     )}
                                    //                 />
                                    //             </div>
                                    //         </div>

                                    //         {/* Role */}
                                    //         <div className="space-y-2">
                                    //             <Label htmlFor={`role-${index}`}>Role</Label>
                                    //             <Input
                                    //                 id={`role-${index}`}
                                    //                 placeholder="Your job title"
                                    //                 {...register(
                                    //                     `workExperience.${index}.role`,
                                    //                     {
                                    //                         required:
                                    //                             "Add your previous role here",
                                    //                     },
                                    //                 )}
                                    //             />
                                    //         </div>

                                    //         {/* Start Date */}
                                    //         <div className="space-y-2">
                                    //             <Label htmlFor={`startDate-${index}`}>
                                    //                 Start Date
                                    //             </Label>
                                    //             <div className="relative">
                                    //                 <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    //                 <Input
                                    //                     id={`startDate-${index}`}
                                    //                     type="month"
                                    //                     className="pl-10"
                                    //                     {...register(
                                    //                         `workExperience.${index}.startDate`,
                                    //                         {
                                    //                             required:
                                    //                                 "Start date is required",
                                    //                         },
                                    //                     )}
                                    //                 />
                                    //             </div>
                                    //         </div>

                                    //         {/* End Date - CONDITIONAL based on currentlyWorking */}
                                    //         {!isCurrentlyWorking(index) && (
                                    //             <div className="space-y-2">
                                    //                 <Label htmlFor={`endDate-${index}`}>
                                    //                     End Date
                                    //                 </Label>
                                    //                 <div className="relative">
                                    //                     <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    //                     <Input
                                    //                         id={`endDate-${index}`}
                                    //                         type="month"
                                    //                         className="pl-10"
                                    //                         disabled={isCurrentlyWorking(
                                    //                             index,
                                    //                         )}
                                    //                         {...register(
                                    //                             `workExperience.${index}.endDate`,
                                    //                             {
                                    //                                 required:
                                    //                                     !isCurrentlyWorking(
                                    //                                         index,
                                    //                                     ),
                                    //                             },
                                    //                         )}
                                    //                     />
                                    //                 </div>
                                    //             </div>
                                    //         )}
                                    //     </div>
                                    //     {/* Currently Working Checkbox */}
                                    //     <div className="flex items-center gap-2">
                                    //         <Checkbox
                                    //             checked={getValues(
                                    //                 `workExperience.${index}.currentlyWorking`,
                                    //             )}
                                    // onCheckedChange={(checked) =>
                                    //     setValue(
                                    //         `workExperience.${index}.currentlyWorking`,
                                    //         checked === true,
                                    //     )
                                    // }
                                    //             id={`currentlyWorking-${index}`}
                                    //             // TODO: Use Controller or custom handling
                                    //             {...register(
                                    //                 `workExperience.${index}.currentlyWorking`,
                                    //             )}
                                    //         />
                                    //         <Label
                                    //             htmlFor={`currentlyWorking-${index}`}
                                    //             className="text-sm font-normal cursor-pointer"
                                    //         >
                                    //             I currently work here
                                    //         </Label>
                                    //         {/* TODO: Show badge when currently working */}
                                    //         {isCurrentlyWorking(index) && (
                                    //             <Badge variant="secondary" className="ml-2">
                                    //                 Current
                                    //             </Badge>
                                    //         )}
                                    //     </div>
                                    // </div>
                                    <WorkExperienceItem
                                        errors={errors}
                                        key={field.id}
                                        index={index}
                                        canRemove={workExperienceFields.length > 1}
                                        // TODO: Pass remove function
                                        onRemove={() => remove(index)}
                                        // TODO: Pass register function
                                        // register={register}
                                        // TODO: Pass watch for currentlyWorking
                                        // isCurrentlyWorking={watch(`workExperience.${index}.currentlyWorking`)}
                                    />
                                ))}
                            </div>
                        </div>

                        <Separator />

                        {/* Section 3: Skills */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium">Skills</h3>
                                <p className="text-sm text-muted-foreground">
                                    Select your top skills (choose up to 10)
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skillOptions.map((skill) => {
                                    const id = `skill-${skill}`;
                                    return (
                                        <label
                                            key={skill}
                                            className="cursor-pointer"
                                            htmlFor={id}
                                        >
                                            <input
                                                type="checkbox"
                                                value={skill}
                                                id={id}
                                                className=" sr-only peer"
                                                {...register("skills", {
                                                    required:
                                                        "Please mention your skill set",
                                                })}
                                            />
                                            <Badge
                                                variant="outline"
                                                className="peer-checked:bg-primary peer-checked:text-primary-foreground transition-colors"
                                            >
                                                {skill}
                                            </Badge>
                                        </label>
                                    );
                                })}
                            </div>

                            {errors.skills && (
                                <p className="text-sm text-destructive">
                                    {errors.skills.message}
                                </p>
                            )}
                            {/* TODO: Show selected count */}
                            {!errors.skills && (
                                <p className="text-sm text-muted-foreground">
                                    {selectedSkills.length} skills selected
                                </p>
                            )}
                        </div>

                        <Separator />

                        {/* Section 4: Portfolio */}
                        <div className="space-y-2">
                            <Label htmlFor="portfolioUrl">Portfolio URL</Label>
                            <div className="relative">
                                <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="portfolioUrl"
                                    type="url"
                                    placeholder="https://yourportfolio.com"
                                    className="pl-10"
                                    {...register("portfolioUrl", {
                                        pattern: {
                                            value: /^https?:\/\//,
                                            message: "Please enter a valid URL",
                                        },
                                    })}
                                />
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Optional: Add a link to your portfolio or personal website
                            </p>
                            {errors?.portfolioUrl && (
                                <p className="text-sm text-destructive">
                                    {errors.portfolioUrl.message}
                                </p>
                            )}
                        </div>

                        {/* Form Actions */}
                        <div className="flex gap-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => reset()}
                            >
                                Reset Form
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                // TODO: Save to localStorage
                            >
                                Save Draft
                            </Button>
                            <Button
                                type="submit"
                                className="flex-1"
                                // TODO: disabled={isSubmitting || !isDirty}
                            >
                                Save & Continue
                            </Button>
                        </div>
                    </form>
                </FormProvider>
            </CardContent>
        </Card>
    );
}

/**
 * ============================================
 * BONUS: Extract this into separate file and use useFormContext
 * ============================================
 *
 * Steps:
 * 1. Create new file: work-experience-item.tsx
 * 2. Wrap parent form with <FormProvider {...methods}>
 * 3. Use useFormContext() instead of props
 * 4. Use useWatch({ name: `workExperience.${index}.currentlyWorking` })
 */
interface WorkExperienceItemProps {
    index: number;
    canRemove: boolean;
    onRemove: (index: number) => void;
    errors: FieldErrors<Inputs>;
}

function WorkExperienceItem({
    index,
    canRemove,
    onRemove,
    errors,
}: WorkExperienceItemProps) {
    // TODO: If using useFormContext:
    const { register, watch, getValues, setValue } = useFormContext();
    const isCurrentlyWorking = watch(`workExperience.${index}.currentlyWorking`);

    // const isCurrentlyWorking = false; // Placeholder

    return (
        <div className="p-4 border rounded-lg space-y-4 relative group">
            {/* Drag Handle - for future reordering feature */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
            </div>

            {/* Remove Button */}
            {canRemove && (
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => onRemove?.(index)}
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            )}

            <div className="grid md:grid-cols-2 gap-4 pt-2">
                {/* Company Name */}
                <div className="space-y-2">
                    <Label htmlFor={`company-${index}`}>Company</Label>
                    <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id={`company-${index}`}
                            placeholder="Company name"
                            className="pl-10"
                            {...register(`workExperience.${index}.company`, {
                                required: "Company name is required",
                            })}
                        />
                        {errors.workExperience && (
                            <p className="text-sm text-destructive">
                                {errors?.workExperience[index]?.company?.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Role */}
                <div className="space-y-2">
                    <Label htmlFor={`role-${index}`}>Role</Label>
                    <Input
                        id={`role-${index}`}
                        placeholder="Your job title"
                        {...register(`workExperience.${index}.role`, {
                            required: "Enter your role",
                        })}
                    />
                    {errors.workExperience && (
                        <p className="text-sm text-destructive">
                            {errors?.workExperience[index]?.role?.message}
                        </p>
                    )}
                </div>

                {/* Start Date */}
                <div className="space-y-2">
                    <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id={`startDate-${index}`}
                            type="month"
                            className="pl-10"
                            {...register(`workExperience.${index}.startDate`, {
                                required: "Enter your joining date",
                            })}
                        />{" "}
                        {errors.workExperience && (
                            <p className="text-sm text-destructive">
                                {errors?.workExperience[index]?.startDate?.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* End Date - CONDITIONAL based on currentlyWorking */}
                {!isCurrentlyWorking && (
                    <div className="space-y-2">
                        <Label htmlFor={`endDate-${index}`}>End Date</Label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id={`endDate-${index}`}
                                type="month"
                                className="pl-10"
                                disabled={isCurrentlyWorking}
                                {...register(`workExperience.${index}.endDate`, {
                                    required: "Last date is required",
                                })}
                            />
                            {errors.workExperience && (
                                <p className="text-sm text-destructive">
                                    {errors?.workExperience[index]?.endDate?.message}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Currently Working Checkbox */}
            <div className="flex items-center gap-2">
                <Checkbox
                    id={`currentlyWorking-${index}`}
                    // TODO: Use Controller or custom handling
                    {...register(`workExperience.${index}.currentlyWorking`)}
                    checked={getValues(`workExperience.${index}.currentlyWorking`)}
                    onCheckedChange={(checked) =>
                        setValue(
                            `workExperience.${index}.currentlyWorking`,
                            checked === true,
                        )
                    }
                />
                <Label
                    htmlFor={`currentlyWorking-${index}`}
                    className="text-sm font-normal cursor-pointer"
                >
                    I currently work here
                </Label>
                {/* TODO: Show badge when currently working */}
                {isCurrentlyWorking && (
                    <Badge variant="secondary" className="ml-2">
                        Current
                    </Badge>
                )}
            </div>
        </div>
    );
}
