"use client";

import { FormEvent, useState } from "react";
import { Button, Flex, Switch, Textarea, TextInput } from "@tremor/react";
import { toast } from "sonner";

export default function Form () {
	const [agreed, setAgreed] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		toast.success("Thank you! We'll get back to you soon.")
	};

	return (
		<form onSubmit={handleSubmit} className={"mx-auto mt-16 max-w-xl sm:mt-20"}>
			<div className={"grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"}>
				<div>
					<label htmlFor="name" className={"block text-sm/6 font-semibold text-gray-900"}>
						Name <span className={"text-red-500"}>*</span>
					</label>
					<div className="mt-2.5">
						<TextInput
							id={"name"}
							name={"name"}
							placeholder={"Complete name"}
							autoComplete={"name"}
							required
							className={"py-1"}
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
				</div>
				<div>
					<label htmlFor={"email"} className={"block text-sm/6 font-semibold text-gray-900"}>
						Email <span className={"text-red-500"}>*</span>
					</label>
					<div className={"mt-2.5"}>
						<TextInput
							id={"email"}
							name={"email"}
							placeholder={"Email"}
							autoComplete={"email"}
							type={"email"}
							className={"py-1"}
							required
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className={"sm:col-span-2"}>
					<label htmlFor="subject" className={"block text-sm/6 font-semibold text-gray-900"}>
						Subject <span className={"text-red-500"}>*</span>
					</label>
					<div className={"mt-2.5"}>
						<TextInput
							id={"subject"}
							name={"subject"}
							placeholder={"Subject of your message"}
							className={"py-1"}
							required
							value={subject}
							onChange={e => setSubject(e.target.value)}
						/>
					</div>
				</div>
				<div className={"sm:col-span-2"}>
					<label htmlFor="message" className={"block text-sm/6 font-semibold text-gray-900"}>
						Message <span className={"text-red-500"}>*</span>
					</label>
					<div className={"mt-2.5"}>
						<Textarea
							id={"message"}
							name={"message"}
							placeholder={"Your message"}
							rows={6}
							required
							value={message}
							onChange={e => setMessage(e.target.value)}
						/>
					</div>
				</div>
				<Flex justifyContent={"start"} className={"gap-x-4 sm:col-span-2"}>
					<Switch
						checked={agreed}
						onChange={setAgreed}>
						<span className={"sr-only"}>Agree to policies</span>
					</Switch>
					<div className={"text-sm/6 text-gray-600"}>
						By selecting this, you agree to our{" "}
						<a href={"/privacy"} className={"font-semibold text-tremor-brand"}>
							privacy&nbsp;policy
						</a>
						.
					</div>
				</Flex>
			</div>
			<div className={"mt-10"}>
				<Button type={"submit"} variant={"primary"} className={"w-full"} disabled={!agreed}>
					Send Message
				</Button>
			</div>
		</form>
	)
}
