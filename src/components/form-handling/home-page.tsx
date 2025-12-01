import { FileText, Zap, Shield, ArrowRight } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";

const phases = [
    {
        id: 1,
        title: "Core React Hooks",
        description:
            "Master useState, useRef, controlled & uncontrolled inputs with custom validation",
        href: "/phase-1",
        icon: FileText,
        topics: [
            "useState",
            "useRef",
            "Controlled Inputs",
            "Custom Validation",
            "Debouncing",
        ],
        difficulty: "Foundation",
        color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    },
    {
        id: 2,
        title: "React Hook Form",
        description:
            "Learn useForm, useFieldArray, useWatch, and useFormContext patterns",
        href: "/phase-2",
        icon: Zap,
        topics: [
            "useForm",
            "useFieldArray",
            "useWatch",
            "useFormContext",
            "Dynamic Fields",
        ],
        difficulty: "Intermediate",
        color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    },
    {
        id: 3,
        title: "Shadcn + Zod + RHF",
        description:
            "Build production-ready forms with schema validation and type safety",
        href: "/phase-3",
        icon: Shield,
        topics: [
            "Zod Schemas",
            "zodResolver",
            "Multi-step Forms",
            "Async Validation",
            "Type Inference",
        ],
        difficulty: "Advanced",
        color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    },
];

export const FormHandlingHomePage = () => {
    return (
        <div className="min-h-screen bg-linear-to-b from-background to-muted/30">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4">
                        Form Mastery Practice
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Freelancer Onboarding Portal
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A real-world form scenario to master React forms from basic hooks
                        to production-ready Zod + React Hook Form integration. UI is ready
                        — you add the logic.
                    </p>
                </div>

                {/* Phase Cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {phases.map((phase) => (
                        <Card
                            key={phase.id}
                            className="relative overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <CardHeader>
                                <div className="flex items-center justify-between mb-2">
                                    <div className={`p-2 rounded-lg ${phase.color}`}>
                                        <phase.icon className="h-5 w-5" />
                                    </div>
                                    <Badge variant="secondary">{phase.difficulty}</Badge>
                                </div>
                                <CardTitle className="text-xl">
                                    Phase {phase.id}: {phase.title}
                                </CardTitle>
                                <CardDescription>{phase.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {phase.topics.map((topic) => (
                                        <Badge
                                            key={topic}
                                            variant="outline"
                                            className="text-xs"
                                        >
                                            {topic}
                                        </Badge>
                                    ))}
                                </div>
                                <Link to={phase.href}>
                                    <Button className="w-full group">
                                        Start Phase {phase.id}
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Quick Info */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-muted-foreground">
                        📖 Check{" "}
                        <code className="bg-muted px-2 py-1 rounded">README.md</code> for
                        detailed instructions and success criteria
                    </p>
                </div>
            </div>
        </div>
    );
};
