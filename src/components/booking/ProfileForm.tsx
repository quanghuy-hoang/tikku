"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useSetUserInfo } from "@store/bookingStore"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    phoneNumber: z.string().min(9, { message: "This field has to be filled." }).max(14)
})

const formFields: FieldValues[] = [
    {
        name: "username",
        label: "Full Name",
        placeholder: "Nguyen Van A",
    },
    {
        name: "email",
        label: "Email",
        placeholder: "example@gmail.com",
    },
    {
        name: "phoneNumber",
        label: "Phone Number",
        placeholder: "(+84) 0xx-xxxxxxx",
    }
]

export function ProfileForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            phoneNumber: ""
        },
    })

    const router = useRouter()
    const setUserInfo = useSetUserInfo()

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        setUserInfo(values)
        router.push('/booking/payment')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 sm:w-3/4 lg:3/5">
                {formFields.map(formField =>
                    <FormField
                        key={formField.label}
                        control={form.control}
                        name={formField.name}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{formField.label}</FormLabel>
                                <FormControl>
                                    <Input placeholder={formField.placeholder} {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                        {formField.description}
                                    </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}
                <div className="flex justify-end">
                    <Button type="submit">Next Step</Button>
                </div>
            </form>
        </Form>
    )
}
