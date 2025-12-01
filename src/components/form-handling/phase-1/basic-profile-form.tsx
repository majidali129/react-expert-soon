import { User, Mail, Lock, FileText, Upload, Eye, EyeOff, Check, X } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
    useCallback,
    useMemo,
    useRef,
    useState,
    type ChangeEvent,
    type FormEvent,
} from "react";

type ProfileFormData = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    bio?: string;
    terms: boolean;
};

type PasswordStrength = {
    length: boolean;
    uppercase: boolean;
    number: boolean;
    special: boolean;
};

const defaultValue = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    terms: false,
};

export function BasicProfileForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState<ProfileFormData>(defaultValue);
    const [errors, setErrors] = useState<Record<string, string | string[] | undefined>>(
        {},
    );
    const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
        length: false,
        number: false,
        special: false,
        uppercase: false,
    });
    const [saving, setSaving] = useState(false);

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);

    const validatePasswordStrength = (value: string) => {
        console.log("validate password validator!!!!1", value);
        setPasswordStrength({
            length: value.length >= 8,
            number: /[1-9]/.test(value),
            uppercase: /[A-Z]/.test(value),
            special: /[^A-Za-z0-9]/.test(value),
        });
    };

    const getPasswordStrength = useMemo(() => {
        console.log("get password strength!!!!2");
        const checks = Object.values(passwordStrength).filter(Boolean).length;
        const strength = (checks / 4) * 100;
        return strength;
    }, [passwordStrength]);

    const label = (name: string) => name.charAt(0).toUpperCase() + name.slice(1);
    const validate = (
        name: keyof ProfileFormData,
        value: string,
        updatedFormData: ProfileFormData,
    ) => {
        let error: string | undefined = undefined;

        if (!value.trim()) {
            // ---- 1. Required ----
            error = `${label(name)} is required`;
            setErrors((prev) => ({ ...prev, [name]: error }));
            return;
        }
        // ---- 2. Field-specific rules ----
        switch (name) {
            case "fullName":
                if (value.length < 5) {
                    error = "Full name must be at least 5 characters";
                }
                break;

            case "email":
                if (!value.includes("@")) {
                    error = "Invalid email format. Missing '@'";
                }
                break;

            case "password":
                console.log("Inside password block");
                validatePasswordStrength(value);
                break;

            case "confirmPassword":
                if (
                    updatedFormData.password &&
                    value.trim() !== updatedFormData.password.trim()
                ) {
                    error = "Passwords do not match";
                }
                break;

            case "bio":
                if (value.length > 500) {
                    error = "Bio must be at most 500 characters";
                }
                break;

            default:
                break;
        }

        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target;
        setFormData((prev) => {
            const updated = { ...prev, [name]: value };
            validate(name as keyof ProfileFormData, value, updated);
            return updated;
        });
    };

    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSaving(true);
        await new Promise((res) => setTimeout(res, 1500));
        setSaving(false);
        formRef.current?.reset();
        setFormData(defaultValue);
        setPasswordStrength({
            length: false,
            number: false,
            special: false,
            uppercase: false,
        });
        fileInputRef.current = null;
    };
    const isValid =
        Object.values(errors).every((err) => !err) &&
        formData.fullName &&
        formData.email &&
        formData.password &&
        formData.confirmPassword &&
        formData.terms === true;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Create Your Profile
                </CardTitle>
                <CardDescription>
                    Fill in your basic information to get started as a freelancer
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
                    <div className="space-y-2">
                        <Label htmlFor="fullName">
                            Full Name <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="fullName"
                                placeholder="John Doe"
                                className="pl-10"
                                value={formData.fullName}
                                name="fullName"
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                        {errors.fullName && (
                            <p className="text-sm text-destructive">{errors.fullName}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">
                            Email Address <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                className="pl-10"
                                name="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                        {errors.email && (
                            <p className="text-sm text-destructive">{errors.email}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">
                            Password <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="pl-10 pr-10"
                                name="password"
                                value={formData.password}
                                onChange={(e) => handleInputChange(e)}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                onClick={toggleShowPassword}
                            >
                                {!showPassword ? (
                                    <Eye className="h-4 w-4" />
                                ) : (
                                    <EyeOff className="w-4 h-4" />
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-sm text-destructive">{errors.password}</p>
                        )}

                        {/* Password Strength Indicator */}
                        <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                                <span className="text-muted-foreground">
                                    Password strength
                                </span>
                                <span className="text-muted-foreground">
                                    Enter password
                                </span>
                            </div>
                            <Progress value={getPasswordStrength} className="h-1" />
                        </div>

                        {/* Password Requirements Checklist */}
                        <ul className="text-xs space-y-1 text-muted-foreground">
                            <li
                                className={`flex items-center gap-2 ${passwordStrength.length ? "text-green-500" : "text-red-500"}`}
                            >
                                <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                                At least 8 characters{" "}
                                <span>
                                    {passwordStrength.length ? (
                                        <Check className="w-3 h-3" />
                                    ) : (
                                        <X className="w-3 h-3" />
                                    )}
                                </span>
                            </li>
                            <li
                                className={`flex items-center gap-2 ${passwordStrength.uppercase ? "text-green-500" : "text-red-500"}`}
                            >
                                <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                                One uppercase letter
                                <span>
                                    {passwordStrength.uppercase ? (
                                        <Check className="w-3 h-3" />
                                    ) : (
                                        <X className="w-3 h-3" />
                                    )}
                                </span>
                            </li>
                            <li
                                className={`flex items-center gap-2 ${passwordStrength.number ? "text-green-500" : "text-red-500"}`}
                            >
                                <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                                One number
                                <span>
                                    {passwordStrength.number ? (
                                        <Check className="w-3 h-3" />
                                    ) : (
                                        <X className="w-3 h-3" />
                                    )}
                                </span>
                            </li>
                            <li
                                className={`flex items-center gap-2 ${passwordStrength.special ? "text-green-500" : "text-red-500"}`}
                            >
                                <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                                One special character
                                <span>
                                    {passwordStrength.special ? (
                                        <Check className="w-3 h-3" />
                                    ) : (
                                        <X className="w-3 h-3" />
                                    )}
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">
                            Confirm Password <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="pl-10"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={(e) => handleInputChange(e)}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                onClick={toggleShowConfirmPassword}
                            >
                                {!showConfirmPassword ? (
                                    <Eye className="h-4 w-4" />
                                ) : (
                                    <EyeOff className="w-4 h-4" />
                                )}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-sm text-destructive">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <Label htmlFor="bio">Bio</Label>
                            <span
                                className={`text-xs  ${formData.bio && formData.bio?.length > 10 ? "text-red-500" : "text-muted-foreground"}`}
                            >
                                {formData.bio?.length}/500
                            </span>
                        </div>
                        <div className="relative">
                            <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Textarea
                                id="bio"
                                name="bio"
                                onChange={(e) => handleInputChange(e)}
                                value={formData.bio}
                                placeholder="Tell clients about yourself, your skills, and experience..."
                                className="pl-10 min-h-[120px] resize-none"
                            />
                        </div>
                        {errors.bio && (
                            <p className="text-sm text-destructive">{errors.bio}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label>Profile Photo</Label>
                        <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                            <Input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                id="profilePhoto"
                            />
                            <label
                                htmlFor="profilePhoto"
                                className="cursor-pointer flex flex-col items-center gap-2"
                            >
                                <div className="p-3 rounded-full bg-muted">
                                    <Upload className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="font-medium">Click to upload</p>
                                    <p className="text-xs text-muted-foreground">
                                        PNG, JPG up to 5MB
                                    </p>
                                </div>
                            </label>
                            {/* TODO: Show selected file name */}
                            {/* TODO: Show image preview */}
                        </div>
                    </div>

                    {/* Terms Checkbox - CONTROLLED */}
                    <div className="flex items-start gap-3">
                        <Checkbox
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onCheckedChange={(checked) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    terms: checked === true,
                                }))
                            }
                        />
                        <div className="grid gap-1.5 leading-none">
                            <Label
                                htmlFor="terms"
                                className="text-sm font-normal cursor-pointer"
                            >
                                I agree to the{" "}
                                <a href="/" className="text-primary hover:underline">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a href="/" className="text-primary hover:underline">
                                    Privacy Policy
                                </a>
                            </Label>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={!isValid || saving}
                    >
                        {saving ? "Wait..." : "Create Profile"}
                    </Button>
                </form>

                {/* Debug Panel - Remove in production */}
                <div className="mt-8 p-4 bg-muted rounded-lg">
                    <p className="text-xs font-mono text-muted-foreground mb-2">
                        Debug: Form State (remove in production)
                    </p>
                    <pre className="text-xs overflow-auto">
                        {/* TODO: JSON.stringify(formData, null, 2) */}
                        {JSON.stringify(formData, null, 2)}
                    </pre>
                </div>
            </CardContent>
        </Card>
    );
}
