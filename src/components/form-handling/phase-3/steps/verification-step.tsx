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

/**
 * ============================================
 * STEP 3: VERIFICATION
 * ============================================
 *
 * FIELDS TO IMPLEMENT:
 * - Government ID upload (file validation)
 * - Profile video URL (YouTube/Vimeo validation)
 * - Social Links (conditional based on category from step 2)
 * - Payment method selection
 *
 * ZOD SCHEMA PATTERNS:
 *
 * // File validation (client-side)
 * const fileSchema = z.instanceof(File)
 *   .refine((file) => file.size <= 5 * 1024 * 1024, "File must be less than 5MB")
 *   .refine((file) => ["image/jpeg", "image/png", "application/pdf"].includes(file.type), "Invalid file type")
 *
 * // URL with specific domains
 * const videoUrlSchema = z.string()
 *   .url("Invalid URL")
 *   .refine(
 *     (url) => url.includes("youtube.com") || url.includes("vimeo.com") || url.includes("loom.com"),
 *     "Only YouTube, Vimeo, or Loom links accepted"
 *   )
 *   .optional()
 *
 * // Conditional required based on category (use superRefine)
 * const socialLinksSchema = z.object({
 *   twitter: z.string().url().optional(),
 *   linkedin: z.string().url().optional(),
 *   github: z.string().url().optional(),
 *   dribbble: z.string().url().optional(),
 * }).superRefine((data, ctx) => {
 *   // At least one social link required
 *   if (!data.twitter && !data.linkedin && !data.github && !data.dribbble) {
 *     ctx.addIssue({
 *       code: "custom",
 *       message: "At least one social link is required",
 *       path: ["twitter"], // Show error on first field
 *     })
 *   }
 * })
 *
 * // Payment method
 * const paymentSchema = z.object({
 *   method: z.enum(["stripe", "paypal", "bank"]),
 *   // Conditional fields based on method
 * }).and(
 *   z.discriminatedUnion("method", [
 *     z.object({ method: z.literal("bank"), accountNumber: z.string().min(10), routingNumber: z.string().length(9) }),
 *     z.object({ method: z.literal("paypal"), paypalEmail: z.string().email() }),
 *     z.object({ method: z.literal("stripe") }), // No additional fields needed
 *   ])
 * )
 */

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
    // TODO: Use useFormContext
    // const form = useFormContext()

    // TODO: Watch category from step 2 to show relevant social links
    // const category = useWatch({ control: form.control, name: "category" })

    // TODO: Watch payment method for conditional fields
    // const paymentMethod = useWatch({ control: form.control, name: "payment.method" })

    const paymentMethod = null; // Placeholder

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
                <Label>
                    Government ID <span className="text-destructive">*</span>
                </Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                        type="file"
                        accept="image/*,.pdf"
                        className="hidden"
                        id="governmentId"
                        // TODO: Register with validation
                    />
                    <label
                        htmlFor="governmentId"
                        className="cursor-pointer flex flex-col items-center gap-2"
                    >
                        <div className="p-3 rounded-full bg-muted">
                            <Upload className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="font-medium">Upload Government ID</p>
                            <p className="text-xs text-muted-foreground">
                                Passport, Driver's License, or National ID
                            </p>
                            <p className="text-xs text-muted-foreground">
                                PNG, JPG, or PDF up to 5MB
                            </p>
                        </div>
                    </label>
                </div>
                {/* TODO: Show uploaded file name */}
                {/* TODO: <FormMessage /> */}

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
                <Label htmlFor="videoUrl">Profile Video URL</Label>
                <div className="relative">
                    <Video className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        id="videoUrl"
                        placeholder="https://youtube.com/watch?v=... or https://vimeo.com/..."
                        className="pl-10"
                        // TODO: Register with URL validation
                    />
                </div>
                <p className="text-xs text-muted-foreground">
                    Optional: Add a YouTube, Vimeo, or Loom video introducing yourself
                </p>
                {/* TODO: <FormMessage /> */}
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
                            <Label
                                htmlFor={social.key}
                                className="text-sm flex items-center gap-2"
                            >
                                <social.icon className="h-4 w-4" />
                                {social.label}
                            </Label>
                            <div className="relative">
                                <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id={social.key}
                                    placeholder={social.placeholder}
                                    className="pl-10"
                                    // TODO: Register with URL validation
                                />
                            </div>
                        </div>
                    ))}
                </div>
                {/* TODO: Show error if no social links provided */}
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
                        <label
                            key={method.value}
                            className={cn(
                                "flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-all",
                                "hover:border-primary/50",
                                paymentMethod === method.value &&
                                    "border-primary ring-2 ring-primary/20",
                            )}
                        >
                            <input
                                type="radio"
                                name="paymentMethod"
                                value={method.value}
                                className="sr-only"
                                // TODO: Register
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
                            )}
                        </label>
                    ))}
                </div>

                {/* Conditional Payment Details */}
                {paymentMethod === "paypal" && (
                    <div className="p-4 border rounded-lg bg-muted/30 space-y-3">
                        <Label htmlFor="paypalEmail">PayPal Email</Label>
                        <Input
                            id="paypalEmail"
                            type="email"
                            placeholder="your-paypal@email.com"
                            // TODO: Register with email validation
                        />
                    </div>
                )}

                {paymentMethod === "bank" && (
                    <div className="p-4 border rounded-lg bg-muted/30 space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="accountNumber">Account Number</Label>
                            <Input
                                id="accountNumber"
                                placeholder="••••••••••••"
                                // TODO: Register with validation
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="routingNumber">Routing Number</Label>
                            <Input
                                id="routingNumber"
                                placeholder="•••••••••"
                                maxLength={9}
                                // TODO: Register with validation (9 digits)
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
