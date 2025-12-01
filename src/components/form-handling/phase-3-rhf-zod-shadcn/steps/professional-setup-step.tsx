"use client";

import {
    Palette,
    Code,
    PenTool,
    Megaphone,
    Plus,
    Trash2,
    DollarSign,
    Clock,
    Languages,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

/**
 * ============================================
 * STEP 2: PROFESSIONAL SETUP
 * ============================================
 *
 * FIELDS TO IMPLEMENT:
 * - Category (discriminated union - different fields based on selection)
 * - Services Offered (dynamic array with Zod validation)
 * - Languages with proficiency level
 *
 * ZOD SCHEMA PATTERN:
 *
 * // Discriminated Union for categories
 * const categorySchema = z.discriminatedUnion("category", [
 *   z.object({
 *     category: z.literal("design"),
 *     figmaProfile: z.string().url().optional(),
 *     dribbbleProfile: z.string().url().optional(),
 *   }),
 *   z.object({
 *     category: z.literal("development"),
 *     githubProfile: z.string().url().optional(),
 *     techStack: z.array(z.string()).min(1),
 *   }),
 *   z.object({
 *     category: z.literal("writing"),
 *     mediumProfile: z.string().url().optional(),
 *     portfolioSamples: z.array(z.string().url()).min(1),
 *   }),
 *   z.object({
 *     category: z.literal("marketing"),
 *     linkedinProfile: z.string().url().optional(),
 *     certifications: z.array(z.string()).optional(),
 *   }),
 * ])
 *
 * // Services Array
 * const serviceSchema = z.object({
 *   name: z.string().min(3, "Service name required"),
 *   description: z.string().min(10, "Description too short"),
 *   price: z.number().min(5, "Minimum price is $5"),
 *   deliveryDays: z.number().min(1).max(90),
 * })
 *
 * const servicesSchema = z.array(serviceSchema)
 *   .min(1, "Add at least one service")
 *   .max(5, "Maximum 5 services")
 *
 * // Languages
 * const languageSchema = z.object({
 *   language: z.string(),
 *   proficiency: z.enum(["basic", "conversational", "fluent", "native"]),
 * })
 */

const categories = [
    {
        value: "design",
        label: "Design",
        icon: Palette,
        color: "bg-pink-500/10 text-pink-600 border-pink-500/30",
    },
    {
        value: "development",
        label: "Development",
        icon: Code,
        color: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    },
    {
        value: "writing",
        label: "Writing",
        icon: PenTool,
        color: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    },
    {
        value: "marketing",
        label: "Marketing",
        icon: Megaphone,
        color: "bg-green-500/10 text-green-600 border-green-500/30",
    },
];

const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Korean",
    "Portuguese",
    "Italian",
    "Hindi",
];

const proficiencyLevels = [
    { value: "basic", label: "Basic" },
    { value: "conversational", label: "Conversational" },
    { value: "fluent", label: "Fluent" },
    { value: "native", label: "Native" },
];

export const ProfessionalSetupStep = () => {
    // TODO: Use useFormContext
    // const form = useFormContext()

    // TODO: Use useFieldArray for services
    // const { fields: serviceFields, append: appendService, remove: removeService } = useFieldArray({
    //   control: form.control,
    //   name: "services"
    // })

    // TODO: Use useWatch for category to show category-specific fields
    // const selectedCategory = useWatch({ control: form.control, name: "category" })

    const selectedCategory = null; // Placeholder

    // Placeholder services - replace with useFieldArray
    const serviceFields = [
        { id: "1", name: "", description: "", price: "", deliveryDays: "" },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-semibold">Professional Setup</h2>
                <p className="text-sm text-muted-foreground">
                    Define your services and expertise
                </p>
            </div>

            {/* Category Selection - DISCRIMINATED UNION */}
            <div className="space-y-3">
                <Label>
                    Primary Category <span className="text-destructive">*</span>
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {categories.map((category) => (
                        <label
                            key={category.value}
                            className={cn(
                                "flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer transition-all",
                                "hover:border-primary/50",
                                selectedCategory === category.value &&
                                    "border-primary ring-2 ring-primary/20",
                            )}
                        >
                            <input
                                type="radio"
                                name="category"
                                value={category.value}
                                className="sr-only"
                                // TODO: {...register("category")}
                            />
                            <div className={cn("p-2 rounded-lg", category.color)}>
                                <category.icon className="h-5 w-5" />
                            </div>
                            <span className="text-sm font-medium">{category.label}</span>
                        </label>
                    ))}
                </div>
                {/* TODO: <FormMessage /> */}
            </div>

            {/* Category-Specific Fields - CONDITIONAL RENDERING */}
            {/* TODO: Show different fields based on selectedCategory */}
            {selectedCategory === "design" && (
                <div className="p-4 border rounded-lg bg-pink-500/5 space-y-4">
                    <p className="text-sm font-medium text-pink-600">
                        Design-specific fields
                    </p>
                    <div className="space-y-2">
                        <Label>Figma Profile URL</Label>
                        <Input placeholder="https://figma.com/@username" />
                    </div>
                    <div className="space-y-2">
                        <Label>Dribbble Profile URL</Label>
                        <Input placeholder="https://dribbble.com/username" />
                    </div>
                </div>
            )}

            {selectedCategory === "development" && (
                <div className="p-4 border rounded-lg bg-blue-500/5 space-y-4">
                    <p className="text-sm font-medium text-blue-600">
                        Development-specific fields
                    </p>
                    <div className="space-y-2">
                        <Label>GitHub Profile URL</Label>
                        <Input placeholder="https://github.com/username" />
                    </div>
                    <div className="space-y-2">
                        <Label>Primary Tech Stack</Label>
                        {/* TODO: Multi-select for tech stack */}
                        <Input placeholder="React, Node.js, TypeScript..." />
                    </div>
                </div>
            )}

            {/* Show placeholder when no category selected */}
            {!selectedCategory && (
                <div className="p-4 border border-dashed rounded-lg text-center text-muted-foreground">
                    <p className="text-sm">Select a category to see additional fields</p>
                </div>
            )}

            {/* Services - DYNAMIC ARRAY WITH ZOD */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <Label>
                            Services Offered <span className="text-destructive">*</span>
                        </Label>
                        <p className="text-sm text-muted-foreground">
                            Add 1-5 services you offer
                        </p>
                    </div>
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        disabled={serviceFields.length >= 5}
                        // TODO: onClick={() => appendService({ name: '', description: '', price: '', deliveryDays: '' })}
                    >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Service
                    </Button>
                </div>

                <div className="space-y-4">
                    {serviceFields.map((field, index) => (
                        <div
                            key={field.id}
                            className="p-4 border rounded-lg space-y-4 relative"
                        >
                            {serviceFields.length > 1 && (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-2 top-2 h-8 w-8 text-muted-foreground hover:text-destructive"
                                    // TODO: onClick={() => removeService(index)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            )}

                            <Badge variant="secondary" className="mb-2">
                                Service {index + 1}
                            </Badge>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2 md:col-span-2">
                                    <Label>Service Name</Label>
                                    <Input
                                        placeholder="e.g., Logo Design, Website Development"
                                        // TODO: {...register(`services.${index}.name`)}
                                    />
                                    {/* TODO: Show error for services.${index}.name */}
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <Label>Description</Label>
                                    <Textarea
                                        placeholder="Describe what's included in this service..."
                                        className="resize-none"
                                        rows={3}
                                        // TODO: {...register(`services.${index}.description`)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>Price (USD)</Label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            type="number"
                                            placeholder="50"
                                            className="pl-10"
                                            // TODO: {...register(`services.${index}.price`, { valueAsNumber: true })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Delivery Time (days)</Label>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            type="number"
                                            placeholder="7"
                                            className="pl-10"
                                            min={1}
                                            max={90}
                                            // TODO: {...register(`services.${index}.deliveryDays`, { valueAsNumber: true })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* TODO: Show array-level error (min 1 service) */}
            </div>

            {/* Languages */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4" />
                    <Label>Languages</Label>
                </div>

                <div className="p-4 border rounded-lg space-y-3">
                    {/* Add more language rows dynamically */}
                    <div className="flex gap-3 items-end">
                        <div className="flex-1 space-y-2">
                            <Label className="text-xs">Language</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                    {languages.map((lang) => (
                                        <SelectItem key={lang} value={lang.toLowerCase()}>
                                            {lang}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex-1 space-y-2">
                            <Label className="text-xs">Proficiency</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Level" />
                                </SelectTrigger>
                                <SelectContent>
                                    {proficiencyLevels.map((level) => (
                                        <SelectItem key={level.value} value={level.value}>
                                            {level.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="button" variant="outline" size="icon">
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* TODO: Show added languages as badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        <Badge variant="secondary" asChild>
                            English (Native)
                            <Button className="ml-1 hover:text-destructive" />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    );
};
