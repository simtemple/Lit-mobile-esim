import React from "react";
import Container from "@/components/Container";

const faqs = [
	{
		id: 1,
		question: "What is HypeSIM?",
		answer:
			"HypeSIM provides instant international eSIMs, allowing you to connect to mobile networks worldwide without the need for physical SIM cards.",
	},
	{
		id: 2,
		question: "How do I install my eSIM after purchase?",
		answer:
			"After purchasing, you will receive a QR code via email. Simply scan the QR code with your phone and follow the on-screen instructions to install your eSIM.",
	},
	{
		id: 3,
		question: "Which devices are compatible with HypeSIM eSIMs?",
		answer:
			"Our eSIMs are compatible with most modern smartphones and tablets that support eSIM technology, such as iPhone, Samsung Galaxy, Google Pixel, and others.",
	},
	{
		id: 4,
		question: "Can I use HypeSIM eSIMs in multiple countries?",
		answer:
			"Yes, HypeSIM offers both single-country and global eSIM plans, allowing you to stay connected across multiple destinations.",
	},
	{
		id: 5,
		question: "How long does it take to activate an eSIM?",
		answer:
			"Activation is instant. Once you install the eSIM profile on your device, you can connect to a network immediately.",
	},
	{
		id: 6,
		question: "Can I top up or extend my HypeSIM plan?",
		answer:
			"Yes, you can easily top up or extend your data plan through your account dashboard or our mobile app.",
	},
	{
		id: 7,
		question: "Is customer support available if I face issues?",
		answer:
			"Absolutely! Our support team is available 24/7 to assist you with setup, troubleshooting, and any questions you may have.",
	},
	{
		id: 8,
		question: "What payment methods do you accept?",
		answer:
			"We accept major credit cards, PayPal, and cryptocurrencies to make your purchase as convenient as possible.",
	},
	{
		id: 9,
		question: "Do I need to remove my existing SIM card to use an eSIM?",
		answer:
			"No, eSIMs work alongside your existing SIM card. You can switch between lines easily through your device settings.",
	},
	{
		id: 10,
		question: "Are HypeSIM eSIMs secure?",
		answer:
			"Yes, we use top-tier encryption standards to ensure your connection and personal information remain secure at all times.",
	},
];

export default function Faq () {
	return (
		<section id={"faq"} className={"py-12 sm:pb-24 sm:pt-12 lg:pt-20 lg:pb-28"}>
			<Container>
				<h2 className="text-2xl font-bold leading-10 tracking-tight text-dark">Frequently asked questions</h2>
				<dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
					{faqs.map((faq) => (
						<div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
							<dt className="text-base font-semibold leading-7 text-dark lg:col-span-5">{faq.question}</dt>
							<dd className="mt-4 lg:col-span-7 lg:mt-0">
								<p className="text-base leading-7 text-gray-600">{faq.answer}</p>
							</dd>
						</div>
					))}
				</dl>
			</Container>
		</section>
	)
}