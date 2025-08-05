// Imports Dicebear's avatar creation core and specific avatar styles (botttsNeutral and initials)
import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

interface GeneratedAvatarProps {
    seed: string;
    className?: string; // Imports Dicebear's avatar creation core and specific avatar styles (botttsNeutral and initials)
    variant: "botttsNeutral" | "initials";
}

/**
 * A reusable avatar generator component using Dicebear avatars.
 * It supports two visual variants: "botttsNeutral" for graphical avatars and
 * "initials" for text-based ones, making it ideal for user profile pictures.
 */
export const GeneratedAvatar = ({ seed, className, variant }: GeneratedAvatarProps) => {
    let avatar;

    // Generate the avatar based on the chosen variant.
    // Each variant uses the provided seed to ensure uniqueness per user.
    if (variant === "botttsNeutral") {
        avatar = createAvatar(botttsNeutral, {
            seed,
        });
    } else {
        avatar = createAvatar(initials, {
            seed,
            fontWeight: 500,
            fontSize: 42,
        });
    }

    return (
        <Avatar className={cn(className)}>
            {/* Render the avatar image as a data URI */}
            <AvatarImage src={avatar.toDataUri()} alt="Avatar"/>
            {/* Fallback rendering when image loading fails: uses the first character of the seed */}
            <AvatarFallback>{seed.charAt(0).toLocaleUpperCase()}</AvatarFallback>
        </Avatar>
    )
}



