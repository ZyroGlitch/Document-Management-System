import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Bot,
    ClipboardCheck,
    FilePlus2,
    FolderOpen,
    Search,
    Sparkles,
} from "lucide-react";

export function DocQueAuthBackground() {
    return (
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,64,175,0.28),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(8,145,178,0.2),_transparent_48%),linear-gradient(135deg,#0b1120_0%,#111827_48%,#070b16_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
                <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-blue-500/15 blur-3xl transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute -bottom-48 -right-32 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-3xl transition-transform duration-1000 group-hover:scale-110" />
                <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 size-full opacity-75 motion-reduce:hidden"
                    fill="none"
                >
                    <g
                        stroke="rgba(96, 165, 250, 0.95)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    >
                        <path
                            d="M 0 112 H 560 V 168 H 1120 V 224 H 1848"
                            pathLength="1960"
                            strokeDasharray="150 2000"
                        >
                            <animate attributeName="stroke-dashoffset" from="0" to="-1960" dur="22s" repeatCount="indefinite" />
                        </path>
                        <path
                            d="M 1848 280 H 1288 V 224 H 728 V 168 H 0"
                            pathLength="1960"
                            strokeDasharray="150 2000"
                        >
                            <animate attributeName="stroke-dashoffset" from="0" to="1960" dur="26s" begin="-8s" repeatCount="indefinite" />
                        </path>
                        <path
                            d="M 280 0 V 224 H 336 V 448 H 392 V 840"
                            pathLength="952"
                            strokeDasharray="150 2000"
                        >
                            <animate attributeName="stroke-dashoffset" from="0" to="-952" dur="24s" begin="-13s" repeatCount="indefinite" />
                        </path>
                        <path
                            d="M 840 840 V 616 H 784 V 392 H 728 V 56"
                            pathLength="896"
                            strokeDasharray="150 2000"
                        >
                            <animate attributeName="stroke-dashoffset" from="0" to="896" dur="28s" begin="-17s" repeatCount="indefinite" />
                        </path>
                        <path
                            d="M 0 392 H 448 V 448 H 1008 V 504 H 1848"
                            pathLength="1960"
                            strokeDasharray="150 2000"
                        >
                            <animate attributeName="stroke-dashoffset" from="0" to="-1960" dur="25s" begin="-5s" repeatCount="indefinite" />
                        </path>
                        <path
                            d="M 1848 560 H 1400 V 504 H 840 V 448 H 280"
                            pathLength="1680"
                            strokeDasharray="150 2000"
                        >
                            <animate attributeName="stroke-dashoffset" from="0" to="1680" dur="23s" begin="-11s" repeatCount="indefinite" />
                        </path>
                        <path
                            d="M 1120 0 V 168 H 1176 V 392 H 1232 V 784"
                            pathLength="896"
                            strokeDasharray="150 2000"
                        >
                            <animate attributeName="stroke-dashoffset" from="0" to="-896" dur="27s" begin="-3s" repeatCount="indefinite" />
                        </path>
                        <path
                            d="M 1680 840 V 728 H 1624 V 560 H 1568 V 224"
                            pathLength="728"
                            strokeDasharray="150 2000"
                        >
                            <animate attributeName="stroke-dashoffset" from="0" to="728" dur="21s" begin="-14s" repeatCount="indefinite" />
                        </path>
                        <path
                            d="M 56 672 H 616 V 728 H 1176 V 784 H 1848"
                            pathLength="1904"
                            strokeDasharray="150 2000"
                        >
                            <animate attributeName="stroke-dashoffset" from="0" to="-1904" dur="24s" begin="-19s" repeatCount="indefinite" />
                        </path>
                        <path
                            d="M 1848 840 H 1344 V 784 H 840 V 728 H 336"
                            pathLength="1624"
                            strokeDasharray="150 2000"
                        >
                            <animate attributeName="stroke-dashoffset" from="0" to="1624" dur="26s" begin="-9s" repeatCount="indefinite" />
                        </path>
                    </g>
                    <g
                        stroke="rgba(74, 222, 128, 0.95)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    >
                        <path d="M 0 56 H 392 V 112 H 952 V 168 H 1568" pathLength="1680" strokeDasharray="150 2000">
                            <animate attributeName="stroke-dashoffset" from="0" to="-1680" dur="20s" begin="-4s" repeatCount="indefinite" />
                        </path>
                        <path d="M 0 224 H 224 V 280 H 784 V 336 H 1344" pathLength="1456" strokeDasharray="150 2000">
                            <animate attributeName="stroke-dashoffset" from="0" to="-1456" dur="25s" begin="-12s" repeatCount="indefinite" />
                        </path>
                        <path d="M 168 840 V 784 H 224 V 616 H 280 V 448" pathLength="504" strokeDasharray="150 2000">
                            <animate attributeName="stroke-dashoffset" from="0" to="504" dur="23s" begin="-7s" repeatCount="indefinite" />
                        </path>
                        <path d="M 1680 0 V 168 H 1736 V 448 H 1792 V 840" pathLength="952" strokeDasharray="150 2000">
                            <animate attributeName="stroke-dashoffset" from="0" to="-952" dur="28s" begin="-16s" repeatCount="indefinite" />
                        </path>
                        <path d="M 0 560 H 392 V 616 H 952 V 672 H 1512" pathLength="1624" strokeDasharray="150 2000">
                            <animate attributeName="stroke-dashoffset" from="0" to="-1624" dur="22s" begin="-2s" repeatCount="indefinite" />
                        </path>
                    </g>
                    <g
                        stroke="rgba(67, 56, 202, 0.98)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    >
                        <path d="M 1848 56 H 1456 V 112 H 896 V 168 H 336" pathLength="1624" strokeDasharray="150 2000">
                            <animate attributeName="stroke-dashoffset" from="0" to="1624" dur="24s" begin="-10s" repeatCount="indefinite" />
                        </path>
                        <path d="M 504 0 V 112 H 560 V 336 H 616 V 560" pathLength="672" strokeDasharray="150 2000">
                            <animate attributeName="stroke-dashoffset" from="0" to="-672" dur="21s" begin="-6s" repeatCount="indefinite" />
                        </path>
                        <path d="M 1848 336 H 1624 V 280 H 1064 V 224 H 504" pathLength="1456" strokeDasharray="150 2000">
                            <animate attributeName="stroke-dashoffset" from="0" to="1456" dur="27s" begin="-18s" repeatCount="indefinite" />
                        </path>
                        <path d="M 1456 840 V 672 H 1400 V 448 H 1344 V 112" pathLength="840" strokeDasharray="150 2000">
                            <animate attributeName="stroke-dashoffset" from="0" to="-840" dur="26s" begin="-13s" repeatCount="indefinite" />
                        </path>
                        <path d="M 1848 728 H 1568 V 672 H 1008 V 616 H 448" pathLength="1512" strokeDasharray="150 2000">
                            <animate attributeName="stroke-dashoffset" from="0" to="1512" dur="23s" begin="-3s" repeatCount="indefinite" />
                        </path>
                    </g>
                </svg>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(129,140,248,0.14)_1px,transparent_1px)] [background-size:56px_56px] opacity-0 transition-opacity duration-700 group-hover:opacity-100 motion-reduce:transition-none" />
            </div>
    );
}

export function DocQueBenefitsPanel() {
    return (
                <Card className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/45 text-white shadow-[0_32px_100px_-30px_rgba(2,6,23,0.85)] ring-1 ring-white/5 backdrop-blur-xl">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"
                    />
                    <CardHeader className="gap-5 px-6 pb-4 pt-8 sm:px-8 sm:pt-10">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
                            <Sparkles aria-hidden="true" className="size-3.5" />
                            Why Doc-Que
                        </div>
                        <div className="space-y-3">
                            <CardTitle className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                                Your documents, easier to manage.
                            </CardTitle>
                            <CardDescription className="max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
                                Request documents, find approved files, and follow each request from one clear workspace.
                            </CardDescription>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-2 px-6 pb-8 sm:px-8 sm:pb-10">
                        <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.035] p-4 transition-colors hover:border-cyan-300/20 hover:bg-white/[0.06]">
                            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-400/10 text-blue-200 ring-1 ring-inset ring-blue-300/15">
                                <Search aria-hidden="true" className="size-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-sm font-semibold text-white">Find approved documents</h3>
                                <p className="text-sm leading-relaxed text-slate-400">Search the documents available in your workspace.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.035] p-4 transition-colors hover:border-emerald-300/20 hover:bg-white/[0.06]">
                            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-200 ring-1 ring-inset ring-emerald-300/15">
                                <FilePlus2 aria-hidden="true" className="size-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-sm font-semibold text-white">Send requests online</h3>
                                <p className="text-sm leading-relaxed text-slate-400">Request the records you need from one place.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.035] p-4 transition-colors hover:border-violet-300/20 hover:bg-white/[0.06]">
                            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-violet-400/10 text-violet-200 ring-1 ring-inset ring-violet-300/15">
                                <ClipboardCheck aria-hidden="true" className="size-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-sm font-semibold text-white">Keep up with progress</h3>
                                <p className="text-sm leading-relaxed text-slate-400">Check pending and approved requests as they move forward.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.035] p-4 transition-colors hover:border-cyan-300/20 hover:bg-white/[0.06]">
                            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-cyan-200 ring-1 ring-inset ring-cyan-300/15">
                                <FolderOpen aria-hidden="true" className="size-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-sm font-semibold text-white">Organize work and personal files</h3>
                                <p className="text-sm leading-relaxed text-slate-400">Keep the documents you need for work and personal use easy to find.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.035] p-4 transition-colors hover:border-fuchsia-300/20 hover:bg-white/[0.06]">
                            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-fuchsia-400/10 text-fuchsia-200 ring-1 ring-inset ring-fuchsia-300/15">
                                <Bot aria-hidden="true" className="size-5" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="text-sm font-semibold text-white">AI Mode Assistant</h3>
                                    <Badge variant="outline" className="h-5 border-fuchsia-300/20 bg-fuchsia-300/10 px-2 text-[9px] font-semibold uppercase tracking-wide text-fuchsia-100">
                                        Coming soon
                                    </Badge>
                                </div>
                                <p className="text-sm leading-relaxed text-slate-400">Search across your files and check request status faster with AI assistance.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
    );
}