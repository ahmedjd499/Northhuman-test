"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface CartProps {
    scrolled?: boolean;
}

export default function Cart({ scrolled = false }: CartProps) {
    const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
        useCart();
    const [isOpen, setIsOpen] = useState(false);

    const totalPrice = getTotalPrice();

    return (
        <>
            {/* Cart Icon Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative p-2 hover:opacity-80 transition-colors cursor-pointer ${scrolled ? "text-secondary" : "text-white"
                    }`}
                aria-label="Shopping bag"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                </svg>

                <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cart.length}
                </span>

            </button>

            {/* Cart Sidebar */}
            {isOpen && (
                <>
                    {/* Backdrop - subtle blur only */}
                    <div
                        className="fixed inset-0 z-40 backdrop-blur-xs"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Cart Panel */}
                    <div className="fixed right-0 top-0 h-screen w-full max-w-md bg-white shadow-xl flex flex-col z-50 animate-in slide-in-from-right">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-gray-200 p-6">
                            <h2 className="font-heading text-2xl font-normal" style={{ color: "#0D1B39" }}>
                                Cart
                            </h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                                aria-label="Close cart"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-6 w-6"
                                >
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {cart.length === 0 ? (
                                <p className="text-center text-gray-400 py-12">
                                    Your cart is empty
                                </p>
                            ) : (
                                <div className="space-y-6">
                                    {cart.map((item) => (
                                        <div
                                            key={item.name}
                                            className="pb-6 border-b border-gray-200"
                                        >
                                            <div className="flex gap-4 mb-4">
                                                <div className="relative h-24 w-24 flex-shrink-0 bg-secondary-bg rounded-xl overflow-hidden">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-contain p-3"
                                                    />
                                                </div>

                                                <div className="flex-1 flex flex-col justify-between">
                                                    <div>
                                                        <h3 className="font-semibold text-sm" style={{ color: "#0D1B39" }}>
                                                            {item.name}
                                                        </h3>
                                                        <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                                                    </div>
                                                    <p className="text-base font-semibold" style={{ color: "#E58411" }}>
                                                        <span className="text-xs">$</span>{item.price.slice(1)}
                                                    </p>
                                                </div>

                                                <button
                                                    onClick={() => removeFromCart(item.name)}
                                                    className="text-gray-400 hover:text-gray-600 transition-colors self-start pt-1"
                                                    aria-label={`Remove ${item.name}`}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        className="h-5 w-5"
                                                    >
                                                        <path d="M18 6L6 18M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-3 bg-secondary-bg rounded-lg p-3 w-fit">
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(item.name, item.quantity - 1)
                                                    }
                                                    className="h-6 w-6 flex items-center justify-center text-gray-600 hover:text-primary transition-colors font-medium"
                                                    aria-label="Decrease quantity"
                                                >
                                                    −
                                                </button>
                                                <span className="text-sm font-semibold w-8 text-center" style={{ color: "#0D1B39" }}>
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(item.name, item.quantity + 1)
                                                    }
                                                    className="h-6 w-6 flex items-center justify-center text-gray-600 hover:text-primary transition-colors font-medium"
                                                    aria-label="Increase quantity"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="border-t border-gray-200 bg-secondary-bg p-6 space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Total:</span>
                                    <span className="text-2xl font-semibold" style={{ color: "#0D1B39" }}>
                                        ${totalPrice.toFixed(2)}
                                    </span>
                                </div>
                                <button
                                    className="w-full py-3 rounded-xl text-white font-medium transition-opacity hover:opacity-90"
                                    style={{ backgroundColor: "#0D1B39" }}
                                    onClick={() => {
                                        alert("Checkout feature coming soon!");
                                        setIsOpen(false);
                                    }}
                                >
                                    Checkout
                                </button>
                                <button
                                    onClick={clearCart}
                                    className="w-full py-2 text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors"
                                >
                                    Clear Cart
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
}
