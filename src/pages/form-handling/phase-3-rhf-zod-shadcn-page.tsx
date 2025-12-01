import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MultiStepOnboarding } from "@/components/form-handling/phase-3-rhf-zod-shadcn/multi-step-onboarding";
import { Link } from "react-router";
import { BackToHome } from "@/components/back-to-home-btn";

export default function Phase3Page() {
    return (
        <div className="min-h-screen bg-muted/30">
            {/* Header */}
            <header className="border-b bg-background flex items-center justify-between px-20">
                <div className="container mx-auto px-4 py-4 flex items-center gap-4">
                    <Link to="/">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="font-semibold">Phase 3: Shadcn + Zod + RHF</h1>
                        <p className="text-sm text-muted-foreground">
                            Production-ready forms with schema validation
                        </p>
                    </div>
                </div>
                <BackToHome />
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <MultiStepOnboarding />
                </div>
            </main>
        </div>
    );
}
