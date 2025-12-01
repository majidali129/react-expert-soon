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

/**
 * ============================================
 * PHASE 2: PROFESSIONAL DETAILS FORM
 * ============================================
 *
 * YOUR TASKS:
 *
 * 1. SETUP REACT HOOK FORM:
 *    - useForm with defaultValues
 *    - register for all inputs
 *    - handleSubmit for form submission
 *    - formState for errors, isSubmitting, isDirty, isValid
 *
 * 2. useFieldArray:
 *    - Dynamic work experience entries
 *    - Add/Remove functionality
 *    - Proper field registration with index
 *
 * 3. useWatch:
 *    - Watch "currentlyWorking" to hide/show end date
 *    - Watch "experienceLevel" to show different hourly rate suggestions
 *    - Watch entire form for debug panel
 *
 * 4. useFormContext (BONUS):
 *    - Extract WorkExperienceItem into separate component
 *    - Use FormProvider to share form context
 *
 * 5. ADVANCED:
 *    - Form persistence to localStorage
 *    - Reset form functionality
 *    - setValue for programmatic updates
 *
 * HINTS:
 * - useFieldArray returns { fields, append, remove, move }
 * - Register with validation: register("field", { required: "Message" })
 * - useWatch can watch specific fields or entire form
 */

export function ProfessionalDetailsForm() {
    // TODO: Setup useForm
    // const { register, handleSubmit, control, formState: { errors, isSubmitting }, setValue, reset } = useForm({
    //   defaultValues: {
    //     title: '',
    //     hourlyRate: '',
    //     experienceLevel: '',
    //     availability: '',
    //     workExperience: [{ company: '', role: '', startDate: '', endDate: '', currentlyWorking: false }],
    //     skills: [],
    //     portfolioUrl: ''
    //   }
    // })

    // TODO: Setup useFieldArray for work experience
    // const { fields, append, remove } = useFieldArray({
    //   control,
    //   name: "workExperience"
    // })

    // TODO: Setup useWatch for conditional rendering
    // const watchExperienceLevel = useWatch({ control, name: 'experienceLevel' })

    const experienceLevels = [
        { value: "junior", label: "Junior (0-2 years)", suggestedRate: "$15-30" },
        { value: "mid", label: "Mid-Level (2-5 years)", suggestedRate: "$30-60" },
        { value: "senior", label: "Senior (5+ years)", suggestedRate: "$60-150" },
    ];

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

    // Placeholder for work experience - replace with useFieldArray fields
    const workExperienceFields = [
        {
            id: "1",
            company: "",
            role: "",
            startDate: "",
            endDate: "",
            currentlyWorking: false,
        },
    ];

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
                <form className="space-y-8">
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
                                id="title"
                                placeholder="e.g., Senior React Developer"
                                // TODO: {...register("title", { required: "Title is required" })}
                            />
                            {/* TODO: Show error: {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>} */}
                        </div>

                        {/* Experience Level */}
                        <div className="space-y-2">
                            <Label>
                                Experience Level{" "}
                                <span className="text-destructive">*</span>
                            </Label>
                            <Select
                            // TODO: Use Controller from RHF for Select components
                            // Or use setValue/watch pattern
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your experience level" />
                                </SelectTrigger>
                                <SelectContent>
                                    {experienceLevels.map((level) => (
                                        <SelectItem key={level.value} value={level.value}>
                                            {level.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
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
                                    // TODO: {...register("hourlyRate", { required: true, min: 5 })}
                                />
                            </div>
                            {/* TODO: Show suggestion based on watched experience level */}
                            {/* {watchExperienceLevel && (
                <p className="text-sm text-muted-foreground">
                  Suggested rate for {watchExperienceLevel}: {experienceLevels.find(l => l.value === watchExperienceLevel)?.suggestedRate}
                </p>
              )} */}
                            <p className="text-sm text-muted-foreground">
                                Select experience level to see suggested rates
                            </p>
                        </div>

                        {/* Availability */}
                        <div className="space-y-3">
                            <Label>
                                Availability <span className="text-destructive">*</span>
                            </Label>
                            <div className="grid gap-2">
                                {availabilityOptions.map((option) => (
                                    <label
                                        key={option.value}
                                        className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                                    >
                                        <input
                                            type="radio"
                                            name="availability"
                                            value={option.value}
                                            className="h-4 w-4"
                                            // TODO: {...register("availability", { required: true })}
                                        />
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-muted-foreground" />
                                            <span>{option.label}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
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
                                // TODO: onClick={() => append({ company: '', role: '', startDate: '', endDate: '', currentlyWorking: false })}
                            >
                                <Plus className="h-4 w-4 mr-2" />
                                Add Experience
                            </Button>
                        </div>

                        {/* Work Experience Items */}
                        <div className="space-y-4">
                            {/* TODO: Replace with fields.map() from useFieldArray */}
                            {workExperienceFields.map((field, index) => (
                                <WorkExperienceItem
                                    key={field.id}
                                    index={index}
                                    canRemove={workExperienceFields.length > 1}
                                    // TODO: Pass remove function
                                    // onRemove={() => remove(index)}
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
                            {skillOptions.map((skill) => (
                                <label key={skill} className="cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value={skill}
                                        className="sr-only peer"
                                        // TODO: {...register("skills")}
                                    />
                                    <Badge
                                        variant="outline"
                                        className="peer-checked:bg-primary peer-checked:text-primary-foreground transition-colors"
                                    >
                                        {skill}
                                    </Badge>
                                </label>
                            ))}
                        </div>
                        {/* TODO: Show selected count */}
                        <p className="text-sm text-muted-foreground">0 skills selected</p>
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
                                // TODO: {...register("portfolioUrl", {
                                //   pattern: { value: /^https?:\/\//, message: "Please enter a valid URL" }
                                // })}
                            />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Optional: Add a link to your portfolio or personal website
                        </p>
                    </div>

                    {/* Form Actions */}
                    <div className="flex gap-4">
                        <Button
                            type="button"
                            variant="outline"
                            // TODO: onClick={() => reset()}
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

                {/* Debug Panel */}
                <div className="mt-8 p-4 bg-muted rounded-lg">
                    <p className="text-xs font-mono text-muted-foreground mb-2">
                        Debug: Form State (useWatch entire form)
                    </p>
                    <pre className="text-xs overflow-auto max-h-60">
                        {/* TODO: JSON.stringify(watch(), null, 2) */}
                        {`{
  "title": "",
  "hourlyRate": "",
  "experienceLevel": "",
  "availability": "",
  "workExperience": [
    {
      "company": "",
      "role": "",
      "startDate": "",
      "endDate": "",
      "currentlyWorking": false
    }
  ],
  "skills": [],
  "portfolioUrl": ""
}`}
                    </pre>
                </div>
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
    // TODO: Add proper types when implementing
    // onRemove: () => void
    // register: UseFormRegister<FormData>
    // isCurrentlyWorking: boolean
}

function WorkExperienceItem({ index, canRemove }: WorkExperienceItemProps) {
    // TODO: If using useFormContext:
    // const { register, watch } = useFormContext()
    // const isCurrentlyWorking = watch(`workExperience.${index}.currentlyWorking`)

    const isCurrentlyWorking = false; // Placeholder

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
                    // TODO: onClick={onRemove}
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
                            // TODO: {...register(`workExperience.${index}.company`, { required: true })}
                        />
                    </div>
                </div>

                {/* Role */}
                <div className="space-y-2">
                    <Label htmlFor={`role-${index}`}>Role</Label>
                    <Input
                        id={`role-${index}`}
                        placeholder="Your job title"
                        // TODO: {...register(`workExperience.${index}.role`, { required: true })}
                    />
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
                            // TODO: {...register(`workExperience.${index}.startDate`, { required: true })}
                        />
                    </div>
                </div>

                {/* End Date - CONDITIONAL based on currentlyWorking */}
                <div className="space-y-2">
                    <Label htmlFor={`endDate-${index}`}>End Date</Label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id={`endDate-${index}`}
                            type="month"
                            className="pl-10"
                            disabled={isCurrentlyWorking}
                            // TODO: {...register(`workExperience.${index}.endDate`, {
                            //   required: !isCurrentlyWorking
                            // })}
                        />
                    </div>
                </div>
            </div>

            {/* Currently Working Checkbox */}
            <div className="flex items-center gap-2">
                <Checkbox
                    id={`currentlyWorking-${index}`}
                    // TODO: Use Controller or custom handling
                    // {...register(`workExperience.${index}.currentlyWorking`)}
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
