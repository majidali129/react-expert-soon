import {
    Upload,
    Video,
    LinkIcon,
    CreditCard,
    AlertCircle,
    Check,
    Twitter,
    Linkedin,
    Github,
    Dribbble,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import z from "zod";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

// ? File validation (client-side)

const fileSchema = z.union([z.instanceof(File), z.literal(null)], {
    error: "Verification document is required.",
});

const videoUrlSchema = z
    .url()
    .refine(
        (url) =>
            url.includes("youtube.com") ||
            url.includes("vimeo.com") ||
            url.includes("loom.com"),
        "Only YouTube, Vimeo, or Loom links accepted",
    );

// Conditional required based on category (use superRefine)
const socialLinksSchema = z
    .object({
        twitter: z.url(),
        linkedin: z.url(),
        github: z.url(),
        dribbble: z.url(),
    })
    .superRefine((data, ctx) => {
        // At least one social link required
        if (!data.twitter && !data.linkedin && !data.github && !data.dribbble) {
            ctx.addIssue({
                code: "custom",
                message: "At least one social link is required",
                path: ["twitter"], // Show error on first field
            });
        }
    });

// Payment method
const paymentSchema = z.discriminatedUnion("method", [
    z.object({
        method: z.literal("bank"),
        accountNumber: z
            .string()
            .min(10, "Account number is required. Must be 10 characters long"),
        routingNumber: z
            .string()
            .min(9, "Routing number must be 9 characters long")
            .length(9),
    }),
    z.object({
        method: z.literal("paypal"),
        paypalEmail: z.email("Invali email"),
        // .refine((email) => email === "", "Email required"),
    }),
    z.object({ method: z.literal("stripe") }),
]);

export const step3Schema = z.object({
    governmentId: fileSchema,
    videoUrl: videoUrlSchema,
    socialLinks: socialLinksSchema,
    payment: paymentSchema,
});

export type Step3Types = z.infer<typeof step3Schema>;

const paymentMethods = [
    { value: "stripe", label: "Stripe", description: "Instant payouts to your bank" },
    { value: "paypal", label: "PayPal", description: "Transfer to PayPal account" },
    { value: "bank", label: "Bank Transfer", description: "Direct deposit (3-5 days)" },
];

const socialLinks = [
    {
        key: "twitter",
        label: "Twitter/X",
        icon: Twitter,
        placeholder: "https://twitter.com/username",
    },
    {
        key: "linkedin",
        label: "LinkedIn",
        icon: Linkedin,
        placeholder: "https://linkedin.com/in/username",
    },
    {
        key: "github",
        label: "GitHub",
        icon: Github,
        placeholder: "https://github.com/username",
    },
    {
        key: "dribbble",
        label: "Dribbble",
        icon: Dribbble,
        placeholder: "https://dribbble.com/username",
    },
];

export const VerificationStep = () => {
    const form = useFormContext();

    const paymentMethod = useWatch({ control: form.control, name: "payment.method" });

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-semibold">Verification & Payment</h2>
                <p className="text-sm text-muted-foreground">
                    Verify your identity and set up payments
                </p>
            </div>

            {/* Government ID Upload */}
            <div className="space-y-2">
                <Controller
                    name="governmentId"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid} className="gap-1">
                            <FieldLabel htmlFor="governmentId">
                                Government ID <span className="text-destructive">*</span>
                            </FieldLabel>
                            <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                                <Input
                                    // {...field}
                                    ref={field.ref}
                                    onChange={(e) => {
                                        const file = e.target.files?.[0] ?? null;
                                        field.onChange(file);
                                    }}
                                    type="file"
                                    accept="image/*,.pdf"
                                    className="hidden"
                                    id="governmentId"
                                />
                                <label
                                    htmlFor="governmentId"
                                    className="cursor-pointer flex flex-col items-center gap-2"
                                >
                                    <div className="p-3 rounded-full bg-muted">
                                        <Upload className="h-6 w-6 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <p className="font-medium">
                                            Upload Government ID
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Passport, Driver's License, or National ID
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            PNG, JPG, or PDF up to 5MB
                                        </p>
                                    </div>
                                </label>
                            </div>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* // TODO: Show uploaded file name */}
                <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                        Your ID is encrypted and only used for verification. It will be
                        deleted after review.
                    </AlertDescription>
                </Alert>
            </div>

            {/* Profile Video */}
            <div className="space-y-2">
                <Controller
                    name="videoUrl"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid} className="gap-1">
                            <FieldLabel htmlFor="videoUrl">Profile Video URL</FieldLabel>
                            <div className="relative">
                                <Video className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    {...field}
                                    id="videoUrl"
                                    placeholder="https://youtube.com/watch?v=... or https://vimeo.com/..."
                                    className="pl-10"
                                />
                                <p className="text-xs text-muted-foreground">
                                    Optional: Add a YouTube, Vimeo, or Loom video
                                    introducing yourself
                                </p>
                            </div>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </div>

            {/* Social Links */}
            <div className="space-y-4">
                <div>
                    <Label>Social Links</Label>
                    <p className="text-sm text-muted-foreground">
                        Add at least one social profile for verification
                    </p>
                </div>

                <div className="grid gap-3">
                    {socialLinks.map((social) => (
                        <div key={social.key} className="space-y-1">
                            <Controller
                                name={`socialLinks.${social.key}`}
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field
                                        data-invalid={fieldState.invalid}
                                        className="gap-1"
                                    >
                                        <FieldLabel
                                            htmlFor={social.key}
                                            className="text-sm flex items-center gap-2"
                                        >
                                            <social.icon className="h-4 w-4" />
                                            {social.label}
                                        </FieldLabel>
                                        <div className="relative">
                                            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                {...field}
                                                id={social.key}
                                                placeholder={social.placeholder}
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
                    ))}
                </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
                <div>
                    <Label>
                        Payment Method <span className="text-destructive">*</span>
                    </Label>
                    <p className="text-sm text-muted-foreground">
                        How would you like to receive payments?
                    </p>
                </div>

                <div className="grid gap-3">
                    {paymentMethods.map((method) => (
                        <Controller
                            key={method.value}
                            name={`payment.method`}
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field
                                    data-invalid={fieldState.invalid}
                                    className="gap-1"
                                >
                                    <FieldLabel
                                        htmlFor={method.value}
                                        className={cn(
                                            "flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-all",
                                            "hover:border-primary/50",
                                            paymentMethod === method.value &&
                                                "border-primary ring-2 ring-primary/20",
                                        )}
                                    >
                                        <input
                                            {...field}
                                            type="radio"
                                            className="sr-only"
                                            value={method.value}
                                        />
                                        <div className="p-2 rounded-lg bg-muted">
                                            <CreditCard className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium">{method.label}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {method.description}
                                            </p>
                                        </div>
                                        {paymentMethod === method.value && (
                                            <Check className="h-5 w-5 text-primary" />
                                        )}{" "}
                                    </FieldLabel>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    ))}
                </div>

                {/* Conditional Payment Details */}
                {paymentMethod === "paypal" && (
                    <div className="p-4 border rounded-lg bg-muted/30 space-y-3">
                        <Label htmlFor="paypalEmail">PayPal Email</Label>
                        <Input
                            {...form.register("payment.paypalEmail")}
                            id="paypalEmail"
                            type="email"
                            placeholder="your-paypal@email.com"
                        />
                    </div>
                )}

                {paymentMethod === "bank" && (
                    <div className="p-4 border rounded-lg bg-muted/30 space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="accountNumber">Account Number</Label>
                            <Input
                                {...form.register("bank.accountNumber")}
                                id="accountNumber"
                                placeholder="••••••••••••"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="routingNumber">Routing Number</Label>
                            <Input
                                {...form.register("bank.routingNumber")}
                                id="routingNumber"
                                placeholder="•••••••••"
                                maxLength={9}
                            />
                        </div>
                    </div>
                )}

                {paymentMethod === "stripe" && (
                    <div className="p-4 border rounded-lg bg-muted/30">
                        <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>
                                You'll connect your Stripe account after registration
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
