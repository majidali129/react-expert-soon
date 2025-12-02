import { User, Mail, Phone, MapPin, AtSign, Loader2, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import * as z from "zod";
import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { useState } from "react";

export const step1Schema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username must be less than 20 characters")
        .regex(/^[a-z0-9_]+$/, "Only lowercase letters, numbers, and underscores"),
    displayName: z.string().min(2, "Display name is required"),
    email: z.email("Invalid email address"),
    phone: z.object({
        countryCode: z.string(),
        number: z.string().min(10, "Invalid phone number"),
    }),
    address: z.object({
        street: z.string().min(1, "Street is required"),
        city: z.string().min(1, "City is required"),
        state: z.string().min(1, "State is required"),
        zip: z.string().min(5, "Invalid ZIP code"),
        country: z.string().min(1, "Country is required"),
    }),
});

export type Step1Types = z.infer<typeof step1Schema>;
export const step1Defaults = {
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
};

const countries = [
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+49", name: "Germany", flag: "🇩🇪" },
    { code: "+33", name: "France", flag: "🇫🇷" },
];

const states = [
    "California",
    "New York",
    "Texas",
    "Florida",
    "Illinois",
    "Pennsylvania",
    "Ohio",
    "Georgia",
    "Michigan",
    "Washington",
];

export const PersonalInfoStep = () => {
    const form = useFormContext();
    const [isCheckingUsername, setIsCheckingUsername] = useState(false);
    const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);

    const checkUsername = async (username: string) => {
        setIsCheckingUsername(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));
        const isAvailable = !["admin", "user", "test"].includes(username.toLowerCase());
        setUsernameAvailable(isAvailable);
        setIsCheckingUsername(false);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-semibold">Personal Information</h2>
                <p className="text-sm text-muted-foreground">
                    Let's start with your basic details
                </p>
            </div>

            {/* Username with availability check */}
            <div className="space-y-2">
                <div className="relative">
                    <Controller
                        control={form.control}
                        name="username"
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid} className="gap-0">
                                <FieldLabel
                                    htmlFor="personal-info-username"
                                    className="py-0"
                                >
                                    Username <span className="text-destructive">*</span>
                                </FieldLabel>
                                <div className="relative py-1">
                                    <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                                    <Input
                                        {...field}
                                        aria-invalid={fieldState.invalid}
                                        id="personal-info-username"
                                        placeholder="majidali129"
                                        autoComplete="off"
                                        className="pl-10 pr-10"
                                        // TODO: Add FormField integration
                                        // TODO: Add onChange for debounced username check
                                    />
                                </div>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                                {!fieldState.invalid && (
                                    <p className="text-xs text-muted-foreground">
                                        Only lowercase letters, numbers, and underscores
                                    </p>
                                )}
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    {isCheckingUsername && (
                                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                                    )}
                                    {usernameAvailable === true && (
                                        <Check className="h-4 w-4 text-green-500" />
                                    )}
                                    {usernameAvailable === false && (
                                        <X className="h-4 w-4 text-destructive" />
                                    )}
                                </div>
                            </Field>
                        )}
                    />
                </div>
            </div>

            {/* Display Name */}
            <div className="space-y-2">
                <Controller
                    control={form.control}
                    name="displayName"
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.error} className="gap-1">
                            <FieldLabel htmlFor="personal-info-displayName">
                                Display Name
                                <span className="text-destructive">*</span>
                            </FieldLabel>

                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    {...field}
                                    aria-invalid={fieldState.invalid}
                                    id="personal-info-displayName"
                                    placeholder="John Doe"
                                    className="pl-10"
                                />
                            </div>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </div>

            {/* Email */}
            <div className="space-y-2">
                <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field className="gap-1" data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="personal-info-email">
                                Email Address <span className="text-destructive">*</span>
                            </FieldLabel>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    {...field}
                                    aria-invalid={fieldState.invalid}
                                    id="personal-info-email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="pl-10"
                                />
                            </div>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </div>

            {/* Phone with Country Code */}
            <div className="space-y-2 grid grid-cols-[150px_1fr]">
                <Controller
                    name="phone.countryCode"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="max-w-[140px]"
                        >
                            <FieldLabel htmlFor="personal-info-phone-number">
                                Phone Number <span className="text-destructive">*</span>
                            </FieldLabel>
                            <div className="flex gap-2">
                                <Select
                                    {...field}
                                    onValueChange={(value) => field.onChange(value)}
                                >
                                    <SelectTrigger className="w-[140px]">
                                        <SelectValue placeholder="Code" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {countries.map((country) => (
                                            <SelectItem
                                                key={country.code}
                                                value={country.code}
                                            >
                                                <span className="flex items-center gap-2">
                                                    <span>{country.flag}</span>
                                                    <span>{country.code}</span>
                                                </span>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <Controller
                    name="phone.number"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className="h-[19.25px]" />
                            <div className="flex gap-2 flex-1">
                                <div className="relative flex-1">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        {...field}
                                        aria-invalid={fieldState.invalid}
                                        id="personal-info-phone-number"
                                        placeholder="(555) 123-4567"
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </div>

            {/* Address - Nested Object */}
            <div className="space-y-4">
                <Label className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Address
                </Label>

                <div className="grid gap-4 p-4 border rounded-lg bg-muted/30">
                    {/* Street */}
                    <Controller
                        name="address.street"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field
                                data-invalid={fieldState.invalid}
                                className="text-sm gap-1"
                            >
                                <FieldLabel htmlFor="street">
                                    Street Address{" "}
                                    <span className="text-destructive">*</span>
                                </FieldLabel>
                                <Input
                                    {...field}
                                    aria-invalid={fieldState.invalid}
                                    id="street"
                                    placeholder="123 Main St"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />

                    {/* City & State */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Controller
                            name="address.city"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field
                                    data-invalid={fieldState.invalid}
                                    className="text-sm gap-1"
                                >
                                    <FieldLabel htmlFor="city">
                                        City <span className="text-destructive">*</span>
                                    </FieldLabel>
                                    <Input
                                        id="city"
                                        placeholder="San Francisco"
                                        {...field}
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <div className="space-y-2">
                            <Controller
                                name="address.state"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field
                                        data-invalid={fieldState.invalid}
                                        className="gap-1"
                                    >
                                        <FieldLabel htmlFor="state" className="text-sm">
                                            State{" "}
                                            <span className="text-destructive">*</span>
                                        </FieldLabel>
                                        <Select
                                            {...field}
                                            onValueChange={(value) =>
                                                field.onChange(value)
                                            }
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select state" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {states.map((state) => (
                                                    <SelectItem
                                                        key={state}
                                                        value={state.toLowerCase()}
                                                    >
                                                        {state}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </Field>
                                )}
                            />
                        </div>
                    </div>

                    {/* ZIP & Country */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Controller
                                name="address.zip"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field
                                        data-invalid={fieldState.invalid}
                                        className="text-sm gap-1"
                                    >
                                        <FieldLabel htmlFor="zip">
                                            ZIP Code{" "}
                                            <span className="text-destructive">*</span>
                                        </FieldLabel>
                                        <Input
                                            id="zip"
                                            placeholder="94102"
                                            {...field}
                                            aria-invalid={fieldState.invalid}
                                            maxLength={10}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </div>
                        <div className="space-y-2">
                            <Controller
                                name="address.country"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field
                                        data-invalid={fieldState.invalid}
                                        className="gap-1"
                                    >
                                        <FieldLabel htmlFor="country" className="text-sm">
                                            Country{" "}
                                            <span className="text-destructive">*</span>
                                        </FieldLabel>
                                        <Select
                                            defaultValue="us"
                                            {...field}
                                            onValueChange={(value) =>
                                                field.onChange(value)
                                            }
                                        >
                                            <SelectTrigger id="country">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {countries.map((country) => (
                                                    <SelectItem
                                                        key={country.code}
                                                        value={country.name
                                                            .toLowerCase()
                                                            .replace(" ", "-")}
                                                    >
                                                        <span className="flex items-center gap-2">
                                                            <span>{country.flag}</span>
                                                            <span>{country.name}</span>
                                                        </span>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </Field>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
