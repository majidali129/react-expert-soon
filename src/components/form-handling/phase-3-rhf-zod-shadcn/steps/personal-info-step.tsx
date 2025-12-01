import { User, Mail, Phone, MapPin, AtSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

/**
 * ============================================
 * STEP 1: PERSONAL INFO
 * ============================================
 *
 * FIELDS TO IMPLEMENT:
 * - Username (async availability check)
 * - Display Name
 * - Email
 * - Phone (with country code)
 * - Address (nested object: street, city, state, zip, country)
 *
 * ZOD SCHEMA PATTERN:
 *
 * const personalInfoSchema = z.object({
 *   username: z.string()
 *     .min(3, "Username must be at least 3 characters")
 *     .max(20, "Username must be less than 20 characters")
 *     .regex(/^[a-z0-9_]+$/, "Only lowercase letters, numbers, and underscores"),
 *   displayName: z.string().min(2, "Display name is required"),
 *   email: z.string().email("Invalid email address"),
 *   phone: z.object({
 *     countryCode: z.string(),
 *     number: z.string().min(10, "Invalid phone number"),
 *   }),
 *   address: z.object({
 *     street: z.string().min(1, "Street is required"),
 *     city: z.string().min(1, "City is required"),
 *     state: z.string().min(1, "State is required"),
 *     zip: z.string().min(5, "Invalid ZIP code"),
 *     country: z.string().min(1, "Country is required"),
 *   }),
 * })
 *
 * SHADCN FORM PATTERN:
 *
 * <FormField
 *   control={form.control}
 *   name="username"
 *   render={({ field }) => (
 *     <FormItem>
 *       <FormLabel>Username</FormLabel>
 *       <FormControl>
 *         <Input {...field} />
 *       </FormControl>
 *       <FormDescription>Your unique identifier</FormDescription>
 *       <FormMessage />
 *     </FormItem>
 *   )}
 * />
 */

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
    // TODO: Use useFormContext to access form
    // const form = useFormContext()

    // TODO: Implement async username check
    // const [isCheckingUsername, setIsCheckingUsername] = useState(false)
    // const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null)

    // const checkUsername = async (username: string) => {
    //   setIsCheckingUsername(true)
    //   // Simulate API call
    //   await new Promise(resolve => setTimeout(resolve, 500))
    //   const isAvailable = !["admin", "user", "test"].includes(username.toLowerCase())
    //   setUsernameAvailable(isAvailable)
    //   setIsCheckingUsername(false)
    // }

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
                <Label htmlFor="username">
                    Username <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        id="username"
                        placeholder="johndoe"
                        className="pl-10 pr-10"
                        // TODO: Add FormField integration
                        // TODO: Add onChange for debounced username check
                    />
                    {/* TODO: Show loading/available/taken status */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {/* {isCheckingUsername && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />} */}
                        {/* {usernameAvailable === true && <Check className="h-4 w-4 text-green-500" />} */}
                        {/* {usernameAvailable === false && <X className="h-4 w-4 text-destructive" />} */}
                    </div>
                </div>
                <p className="text-xs text-muted-foreground">
                    Only lowercase letters, numbers, and underscores
                </p>
                {/* TODO: <FormMessage /> */}
            </div>

            {/* Display Name */}
            <div className="space-y-2">
                <Label htmlFor="displayName">
                    Display Name <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="displayName" placeholder="John Doe" className="pl-10" />
                </div>
                {/* TODO: <FormMessage /> */}
            </div>

            {/* Email */}
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
                    />
                </div>
                {/* TODO: <FormMessage /> */}
            </div>

            {/* Phone with Country Code */}
            <div className="space-y-2">
                <Label>
                    Phone Number <span className="text-destructive">*</span>
                </Label>
                <div className="flex gap-2">
                    <Select>
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent>
                            {countries.map((country) => (
                                <SelectItem key={country.code} value={country.code}>
                                    <span className="flex items-center gap-2">
                                        <span>{country.flag}</span>
                                        <span>{country.code}</span>
                                    </span>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <div className="relative flex-1">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="(555) 123-4567" className="pl-10" />
                    </div>
                </div>
                {/* TODO: <FormMessage /> for nested phone.number */}
            </div>

            {/* Address - Nested Object */}
            <div className="space-y-4">
                <Label className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Address
                </Label>

                <div className="grid gap-4 p-4 border rounded-lg bg-muted/30">
                    {/* Street */}
                    <div className="space-y-2">
                        <Label htmlFor="street" className="text-sm">
                            Street Address <span className="text-destructive">*</span>
                        </Label>
                        <Input id="street" placeholder="123 Main St" />
                        {/* TODO: <FormMessage /> for address.street */}
                    </div>

                    {/* City & State */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="city" className="text-sm">
                                City <span className="text-destructive">*</span>
                            </Label>
                            <Input id="city" placeholder="San Francisco" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="state" className="text-sm">
                                State <span className="text-destructive">*</span>
                            </Label>
                            <Select>
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
                        </div>
                    </div>

                    {/* ZIP & Country */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="zip" className="text-sm">
                                ZIP Code <span className="text-destructive">*</span>
                            </Label>
                            <Input id="zip" placeholder="94102" maxLength={10} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="country" className="text-sm">
                                Country <span className="text-destructive">*</span>
                            </Label>
                            <Select defaultValue="us">
                                <SelectTrigger>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
