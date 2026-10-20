import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GoogleIcon } from "@/components/icons/google-icon";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link, useForm } from "@inertiajs/react";
import { useRoute } from "ziggy-js";
import { Spinner } from "@/components/ui/spinner";
import {
    AlertCircle,
    ArrowRight,
    Bot,
    ClipboardCheck,
    Eye,
    EyeOff,
    FilePlus2,
    FolderOpen,
    KeyRound,
    Mail,
    Search,
    Sparkles,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
    const route = useRoute();
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("auth.login"));
    };

    return (
        <section className="group relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-[#070b16] px-4 py-6 sm:px-6 sm:py-8">
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

            <div className="relative z-10 mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-evenly gap-8 px-2 sm:px-4 md:px-6 lg:flex-row lg:justify-between lg:gap-12 lg:px-8 xl:px-12 2xl:px-16">
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

                <Card className="relative w-full max-w-md rounded-[2rem] border border-white/70 bg-gradient-to-b from-white to-slate-50/95 px-6 py-8 shadow-[0_32px_100px_-30px_rgba(2,6,23,0.85)] ring-1 ring-black/5 backdrop-blur-xl sm:px-8 sm:py-9">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500"
                />
                <CardHeader className="flex flex-col items-center gap-5 px-0 pt-0 text-center">
                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                        <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-cyan-50 shadow-sm ring-1 ring-slate-200/80">
                            <img
                                src="/imgs/logo.png"
                                alt="Doc-Que logo"
                                className="size-9 object-contain"
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-base font-semibold tracking-tight text-slate-950">
                                Doc-Que
                            </p>
                            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                                Document workspace
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <CardTitle className="text-3xl font-semibold tracking-tight text-slate-950">
                            Welcome back
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed text-slate-500">
                            Sign in to continue to your Doc-Que workspace.
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="flex flex-col gap-6 px-0">
                    <div className="space-y-4">
                        <Button
                            type="button"
                            className="h-12 w-full gap-3 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md focus-visible:ring-4 focus-visible:ring-slate-200"
                        >
                            <GoogleIcon className="size-5" />
                            Sign in with Google
                        </Button>

                        <div className="my-1 flex h-7 items-center gap-3">
                            <Separator className="flex-1 bg-gradient-to-r from-transparent to-slate-200" />
                            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200/90 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500">
                                <span
                                    aria-hidden="true"
                                    className="size-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                                />
                                OR CONTINUE WITH EMAIL
                            </span>
                            <Separator className="flex-1 bg-gradient-to-l from-transparent to-slate-200" />
                        </div>
                    </div>

                    <form onSubmit={submit}>
                        <FieldGroup className="gap-4">
                            <Field className="gap-2">
                                <FieldLabel
                                    htmlFor="email"
                                    className="text-sm font-medium text-slate-700"
                                >
                                    Email
                                </FieldLabel>
                                <div className="relative">
                                    <Mail
                                        aria-hidden="true"
                                        className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400 transition-colors"
                                    />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="ex. john@gmail.com"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="h-11 rounded-xl border-slate-200 bg-slate-50/80 py-2 pl-10 pr-3.5 text-sm text-slate-900 shadow-none placeholder:text-slate-400 transition focus-visible:border-indigo-400 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-indigo-100"
                                    />
                                </div>
                                {errors.email && (
                                    <FieldDescription className="text-rose-600">
                                        {errors.email}
                                    </FieldDescription>
                                )}
                            </Field>

                            <Field className="gap-2">
                                <FieldLabel
                                    htmlFor="password"
                                    className="text-sm font-medium text-slate-700"
                                >
                                    Password
                                </FieldLabel>
                                <div className="relative">
                                    <KeyRound
                                        aria-hidden="true"
                                        className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400 transition-colors"
                                    />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className="h-11 rounded-xl border-slate-200 bg-slate-50/80 py-2 pl-10 pr-12 text-sm text-slate-900 shadow-none placeholder:text-slate-400 transition focus-visible:border-indigo-400 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-indigo-100"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon-sm"
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                        aria-pressed={showPassword}
                                        onClick={() =>
                                            setShowPassword((visible) => !visible)
                                        }
                                        className="absolute right-1.5 top-1/2 size-8 -translate-y-1/2 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 focus-visible:ring-2 focus-visible:ring-indigo-200"
                                    >
                                        {showPassword ? (
                                            <EyeOff
                                                aria-hidden="true"
                                                className="size-4"
                                            />
                                        ) : (
                                            <Eye
                                                aria-hidden="true"
                                                className="size-4"
                                            />
                                        )}
                                    </Button>
                                </div>
                                {errors.password && (
                                    <FieldDescription className="text-rose-600">
                                        {errors.password}
                                    </FieldDescription>
                                )}
                            </Field>

                            {errors.message && (
                                <Alert
                                    variant="destructive"
                                    className="items-center rounded-xl border-rose-200 bg-rose-50 px-3 py-2.5 text-rose-700"
                                >
                                    <AlertCircle aria-hidden="true" />
                                    <AlertDescription className="text-rose-700">
                                        {errors.message}
                                    </AlertDescription>
                                </Alert>
                            )}

                            <Button
                                type="submit"
                                className="group h-12 w-full rounded-xl bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 text-sm font-semibold tracking-wide text-white shadow-lg shadow-indigo-950/15 transition-all hover:-translate-y-0.5 hover:from-slate-900 hover:via-indigo-900 hover:to-slate-900 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-indigo-200"
                                disabled={processing}
                            >
                                {processing ? (
                                    <div className="flex items-center gap-3">
                                        <Spinner data-icon="inline-start" />
                                        Processing...
                                    </div>
                                ) : (
                                    <>
                                        LOGIN
                                        <ArrowRight
                                            aria-hidden="true"
                                            className="size-4 transition-transform group-hover:translate-x-0.5"
                                        />
                                    </>
                                )}
                            </Button>
                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter className="justify-center border-t border-slate-200/80 bg-transparent px-0 pb-4 pt-4">
                    <p className="text-center text-sm text-slate-500">
                        Don&apos;t have an account yet?{" "}
                        <Button
                            asChild
                            variant="link"
                            className="h-auto px-1 py-0 font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-indigo-700 hover:decoration-indigo-300"
                        >
                            <Link href={route("web.register")}>Sign up</Link>
                        </Button>
                    </p>
                </CardFooter>
                </Card>
            </div>
        </section>
    );
}
