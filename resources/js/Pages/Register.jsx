import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/icons/google-icon";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { DocQueAuthBackground, DocQueBenefitsPanel } from "@/components/auth-visuals";
import { Link, useForm } from "@inertiajs/react";
import { ArrowRight, Eye, EyeOff, KeyRound, Mail, UserRound } from "lucide-react";
import { useState } from "react";
import { useRoute } from "ziggy-js";

export default function Register() {
    const route = useRoute();
    const [showSuccess, setShowSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("auth.register"), {
            onSuccess: () => setShowSuccess(true),
        });
    };

    return (
        <section className="group relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-[#070b16] px-4 py-6 sm:px-6 sm:py-8">
            <DocQueAuthBackground />

            <div className="relative z-10 mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-evenly gap-8 px-2 sm:px-4 md:px-6 lg:flex-row lg:justify-between lg:gap-12 lg:px-8 xl:px-12 2xl:px-16">
                <DocQueBenefitsPanel />

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
                                Create your account
                            </CardTitle>
                            <CardDescription className="text-sm leading-relaxed text-slate-500">
                                Sign up to get started with your Doc-Que workspace.
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
                                Sign up with Google
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
                                        htmlFor="name"
                                        className="text-sm font-medium text-slate-700"
                                    >
                                        Name
                                    </FieldLabel>
                                    <div className="relative">
                                        <UserRound
                                            aria-hidden="true"
                                            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                                        />
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="ex. John Ford"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            className="h-11 rounded-xl border-slate-200 bg-slate-50/80 py-2 pl-10 pr-3.5 text-sm text-slate-900 shadow-none placeholder:text-slate-400 transition focus-visible:border-indigo-400 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-indigo-100"
                                        />
                                    </div>
                                    {errors.name && (
                                        <FieldDescription className="text-rose-600">
                                            {errors.name}
                                        </FieldDescription>
                                    )}
                                </Field>

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
                                            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
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
                                            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                                        />
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Create a password"
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
                                            SIGN UP
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
                            Already have an account?{" "}
                            <Button
                                asChild
                                variant="link"
                                className="h-auto px-1 py-0 font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-indigo-700 hover:decoration-indigo-300"
                            >
                                <Link href={route("web.login")}>Log in</Link>
                            </Button>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
}
