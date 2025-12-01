"use client";

import type React from "react";

import {
    User,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    DollarSign,
    Languages,
    Shield,
    Edit,
    CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/**
 * ============================================
 * STEP 4: REVIEW & SUBMIT
 * ============================================
 *
 * YOUR TASKS:
 * - Display all collected form data
 * - Allow editing by jumping to specific steps
 * - Show validation summary
 * - Handle final submission
 *
 * IMPLEMENTATION:
 * - Use useFormContext to access all form data
 * - Create edit buttons that call setStep() to jump back
 * - Show loading state during submission
 * - Handle success/error responses
 *
 * BONUS:
 * - Transform data before submission using Zod
 * - Add confirmation modal before submit
 * - Show submission progress
 */

export const ReviewStep = () => {
    // TODO: Use useFormContext to get all form data
    // const form = useFormContext()
    // const formData = form.watch()

    // Placeholder data - replace with actual form data
    const formData = {
        username: "johndoe",
        displayName: "John Doe",
        email: "john@example.com",
        phone: { countryCode: "+1", number: "(555) 123-4567" },
        address: {
            street: "123 Main St",
            city: "San Francisco",
            state: "California",
            zip: "94102",
            country: "United States",
        },
        category: "development",
        services: [
            { name: "Website Development", price: 500, deliveryDays: 7 },
            { name: "API Integration", price: 300, deliveryDays: 5 },
        ],
        languages: [{ language: "English", proficiency: "native" }],
        payment: { method: "stripe" },
    };

    // TODO: Implement jump to step function
    // const jumpToStep = (step: number) => {
    //   setCurrentStep(step)
    // }

    const Section = ({
        title,
        step,
        children,
    }: {
        title: string;
        step: number;
        children: React.ReactNode;
    }) => (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <h3 className="font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    {title}
                </h3>
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-8 text-xs"
                    // TODO: onClick={() => jumpToStep(step)}
                >
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                </Button>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">{children}</div>
        </div>
    );

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-semibold">Review Your Profile</h2>
                <p className="text-sm text-muted-foreground">
                    Please review your information before submitting
                </p>
            </div>

            {/* Personal Info Summary */}
            <Section title="Personal Information" step={1}>
                <div className="grid gap-3 text-sm">
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Username:</span>
                        <span className="font-medium">@{formData.username}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Display Name:</span>
                        <span className="font-medium">{formData.displayName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Email:</span>
                        <span className="font-medium">{formData.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Phone:</span>
                        <span className="font-medium">
                            {formData.phone.countryCode} {formData.phone.number}
                        </span>
                    </div>
                    <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span className="text-muted-foreground">Address:</span>
                        <span className="font-medium">
                            {formData.address.street}, {formData.address.city},{" "}
                            {formData.address.state} {formData.address.zip}
                        </span>
                    </div>
                </div>
            </Section>

            <Separator />

            {/* Professional Info Summary */}
            <Section title="Professional Details" step={2}>
                <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Category:</span>
                        <Badge variant="secondary" className="capitalize">
                            {formData.category}
                        </Badge>
                    </div>

                    <div>
                        <p className="text-muted-foreground mb-2">Services Offered:</p>
                        <div className="grid gap-2">
                            {formData.services.map((service) => (
                                <div
                                    key={service.name}
                                    className="flex items-center justify-between p-2 bg-background rounded"
                                >
                                    <span className="font-medium">{service.name}</span>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <DollarSign className="h-3 w-3" />
                                            {service.price}
                                        </span>
                                        <span>{service.deliveryDays} days</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Languages className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Languages:</span>
                        <div className="flex gap-1">
                            {formData.languages.map((lang) => (
                                <Badge
                                    key={lang.language}
                                    variant="outline"
                                    className="text-xs"
                                >
                                    {lang.language} ({lang.proficiency})
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Separator />

            {/* Verification Summary */}
            <Section title="Verification & Payment" step={3}>
                <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">ID Verification:</span>
                        {/* TODO: Show actual file name or "Not uploaded" */}
                        <Badge variant="secondary">Uploaded</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Payment Method:</span>
                        <Badge variant="secondary" className="capitalize">
                            {formData.payment.method}
                        </Badge>
                    </div>
                </div>
            </Section>

            {/* Terms Confirmation */}
            <div className="p-4 border rounded-lg bg-green-500/5 border-green-500/20">
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                        <p className="font-medium text-green-700">Ready to Submit</p>
                        <p className="text-sm text-muted-foreground">
                            By clicking "Complete Registration", you agree to our Terms of
                            Service and Privacy Policy. Your profile will be reviewed
                            within 24-48 hours.
                        </p>
                    </div>
                </div>
            </div>

            {/* Debug: Full Form Data */}
            <details className="text-xs">
                <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                    View Raw Form Data (Debug)
                </summary>
                <pre className="mt-2 p-4 bg-muted rounded-lg overflow-auto max-h-60">
                    {JSON.stringify(formData, null, 2)}
                </pre>
            </details>
        </div>
    );
};
