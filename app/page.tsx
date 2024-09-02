import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % 200);
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F9] p-6">
      <nav className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <svg
            className=" h-6 w-6 text-[#00A211]"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
          <span className="text-xl font-bold">
            Ecomflow
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            className="text-sm font-medium hover:underline"
            href="#"
          >
            Supply-Chain
          </Link>
          <Link
            className="text-sm font-medium hover:underline"
            href="#"
          >
            Pricing & Benefits
          </Link>
          <Link
            className="text-sm font-medium hover:underline"
            href="#"
          >
            FAQ
          </Link>
          <Button className="bg-[#00A211] text-white hover:bg-[#008E0F]">
            Work with us
          </Button>
        </div>
      </nav>
      <Card className="p-8 mb-12">
        <div className="flex items-start justify-between">
          <div className="max-w-2xl">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-4">
              Your trusted 3PL partner for business with
              China
            </div>
            <h1 className="text-4xl font-bold mb-4">
              The future of supply-chain has arrived.
            </h1>
            <p className="text-gray-600 mb-6">
              Ecomflow is third-party logistics reinvented
              with a dedicated, brand-friendly approach.
              With 2 warehouse locations in Mainland China,
              Ecomflow is offering the best of two worlds.
              All the benefits of China fulfilment, without
              the downside.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-[#00A211] text-white hover:bg-[#008E0F]">
                Work with us
              </Button>
              <Button variant="outline">
                Pricing & benefits
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-4">
            <Card className="bg-green-900 text-white p-4">
              <h3 className="text-3xl font-bold">x4.3</h3>
              <p>Better cash flow</p>
            </Card>
            <Card className="bg-white p-4">
              <h3 className="text-3xl font-bold text-green-500">
                65+
              </h3>
              <p>Countries</p>
            </Card>
            <Card className="bg-white p-4">
              <h3 className="text-3xl font-bold text-green-500">
                30%
              </h3>
              <p>Margin improvement</p>
              <p className="text-sm text-green-500">
                ↑ 34% vs last year
              </p>
            </Card>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p>Trusted by Brands</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">35,000+</h3>
            <p>Parcels shipped per day</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">99.5%</h3>
            <p>Successful deliveries</p>
          </div>
        </div>
      </Card>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Ecomflow is trusted by{" "}
          <span className="text-[#00A211]">
            50+ top brands
          </span>{" "}
          worldwide.
        </h2>
      </div>
      <div className="relative h-20 overflow-hidden">
        <div
          className="flex space-x-8 absolute"
          style={{
            transform: `translateX(-${offset}px)`,
            width: "200%",
          }}
        >
          {[...Array(10)].map((_, i) => (
            <Image
              key={i}
              src={`/placeholder.svg?height=80&width=160`}
              alt={`Logo ${i + 1}`}
              width={160}
              height={80}
              className="object-contain"
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <Image
              key={i + 10}
              src={`/placeholder.svg?height=80&width=160`}
              alt={`Logo ${i + 11}`}
              width={160}
              height={80}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
