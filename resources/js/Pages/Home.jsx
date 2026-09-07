import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/icons/google-icon";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link, useForm } from "@inertiajs/react";
import { useRoute } from "ziggy-js";
import { Spinner } from "@/components/ui/spinner";

export default function Home() {
    const route = useRoute();

    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("auth.login"));
    };

    return (
        <section
            className="relative min-h-screen flex items-center justify-center bg-slate-700 bg-cover bg-center p-6"
            style={{ backgroundImage: "url('/imgs/subtle-prism.svg')" }}
        >
            <div className="absolute inset-0 bg-slate-900/60" />

            <Card className="relative z-10 min-h-[100px] min-w-[450px] px-5 py-8">
                <CardContent className="h-full flex-col justify-center gap-y-5">
                    <div className="flex flex-1 justify-center gap-3 mb-8">
                        <img
                            src="/imgs/logo.png"
                            alt="Doc-Que logo"
                            className="h-12 w-12"
                        />

                        <h2 className="text-4xl text-slate-700">Doc-Que</h2>
                    </div>

                    <Button className="w-full shadow border-0 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                        <GoogleIcon className="size-5" />
                        Sign in with Google
                    </Button>

                    <div className="flex items-center gap-3 my-6">
                        <Separator className="flex-1" />
                        <span className="text-xs text-muted-foreground">
                            OR
                        </span>
                        <Separator className="flex-1" />
                    </div>

                    <form onSubmit={submit}>
                        <Field className="mb-4">
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input
                                id="email"
                                type="email"
                                placeholder="ex. john@gmail.com"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <FieldDescription>
                                    {errors.email}
                                </FieldDescription>
                            )}
                        </Field>

                        <Field className="mb-6">
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <Input
                                id="password"
                                type="password"
                                placeholder="ex. 12345678"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            {errors.password && (
                                <FieldDescription>
                                    {errors.password}
                                </FieldDescription>
                            )}
                        </Field>

                        {errors.message && (
                            <FieldDescription className="mb-4 text-center">
                                {errors.message}
                            </FieldDescription>
                        )}

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={processing}
                        >
                            {processing ? (
                                <div className="flex items-center gap-3">
                                    <Spinner data-icon="inline-start" />
                                    Processing...
                                </div>
                            ) : (
                                "Log in"
                            )}
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-slate-600">
                        Don&apos;t have an account yet?{" "}
                        <Link
                            href={route("web.register")}
                            className="font-medium text-slate-900 underline underline-offset-4"
                        >
                            Sign up
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </section>
    );
}
