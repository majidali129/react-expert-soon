import { Link } from "react-router";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

export const BackToHome = ({ url }: { url?: string }) => {
    return (
        <Button asChild variant={"secondary"}>
            <Link to={url ? url : "/"}>
                <ArrowLeft /> Home
            </Link>
        </Button>
    );
};
