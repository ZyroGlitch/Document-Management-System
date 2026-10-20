import * as React from "react";
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";

import { cn } from "@/lib/utils";

function Combobox({ ...props }) {
    return <ComboboxPrimitive.Root data-slot="combobox" {...props} />;
}

function ComboboxInput({ className, ...props }) {
    return (
        <ComboboxPrimitive.Input
            data-slot="combobox-input"
            className={cn(
                "h-10 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm",
                className,
            )}
            {...props}
        />
    );
}

function ComboboxContent({ className, children, sideOffset = 4, ...props }) {
    return (
        <ComboboxPrimitive.Portal>
            <ComboboxPrimitive.Positioner
                sideOffset={sideOffset}
                className="isolate z-50 w-[var(--anchor-width)]"
            >
                <ComboboxPrimitive.Popup
                    data-slot="combobox-content"
                    className={cn(
                        "max-h-60 w-full overflow-auto rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none",
                        className,
                    )}
                    {...props}
                >
                    {children}
                </ComboboxPrimitive.Popup>
            </ComboboxPrimitive.Positioner>
        </ComboboxPrimitive.Portal>
    );
}

function ComboboxEmpty({ className, ...props }) {
    return (
        <ComboboxPrimitive.Empty
            data-slot="combobox-empty"
            className={cn(
                "px-2 py-6 text-center text-sm text-muted-foreground",
                className,
            )}
            {...props}
        />
    );
}

function ComboboxList({ className, ...props }) {
    return (
        <ComboboxPrimitive.List
            data-slot="combobox-list"
            className={cn("outline-none", className)}
            {...props}
        />
    );
}

function ComboboxItem({ className, children, ...props }) {
    return (
        <ComboboxPrimitive.Item
            data-slot="combobox-item"
            className={cn(
                "relative flex w-full cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
                className,
            )}
            {...props}
        >
            {children}
        </ComboboxPrimitive.Item>
    );
}

export {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
};
