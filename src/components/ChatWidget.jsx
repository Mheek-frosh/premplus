import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ThumbsUp, ThumbsDown, Copy } from 'lucide-react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    // Initial message from bot
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Have a question? Send us a message and our team will get back to you shortly.",
            isBot: true,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputText, setInputText] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!inputText.trim()) return;

        // Redirect to WhatsApp with the user's message
        const whatsappNumber = "2348144648025"; // +234 814 464 8025
        const message = encodeURIComponent(inputText);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank');

        // Clear input after sending
        setInputText("");
    };

    return (
        <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end pointer-events-auto">

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 md:mb-6 w-[calc(100vw-32px)] md:w-[380px] fixed bottom-24 md:bottom-28 right-4 md:right-8 bg-app-card rounded-3xl shadow-2xl overflow-hidden flex flex-col font-sans border border-app"
                        style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.2)" }}
                    >
                        {/* Header */}
                        <div className="bg-brand-yellow p-6 text-white relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <div className="flex items-center gap-3 mb-1">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <div className="w-6 h-6 bg-brand-dark rounded-full" /> {/* Robot Icon Placeholder */}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-none">Premplus Support</h3>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                                        <span className="text-xs opacity-90">Online</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Messages Body */}
                        <div className="flex-1 bg-app-secondary p-4 h-[350px] overflow-y-auto space-y-4">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                                    {msg.isBot && (
                                        <div className="w-8 h-8 bg-brand-yellow rounded-full flex-shrink-0 mr-2 flex items-center justify-center text-white text-xs font-bold" title="Premplus Support">
                                            PS
                                        </div>
                                    )}
                                    <div className={`max-w-[80%] rounded-2xl p-3 text-sm relative group ${msg.isBot
                                        ? 'bg-brand-yellow text-white rounded-tl-none'
                                        : 'bg-app-main text-app-main rounded-tr-none border border-app'
                                        }`}>
                                        <p>{msg.text}</p>
                                        <span className={`text-[10px] block mt-1 ${msg.isBot ? 'text-white/70' : 'text-app-muted'}`}>
                                            {msg.timestamp}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Footer Input */}
                        <div className="p-4 bg-app-card border-t border-app">
                            <div className="relative bg-app-main rounded-2xl border border-app">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your message here..."
                                    className="w-full bg-transparent border-none focus:ring-0 py-3 pl-4 pr-10 text-sm text-app-main placeholder:text-app-muted"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-yellow hover:text-brand-green transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button Trigger */}
            <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 ${isOpen ? 'bg-gray-400 rotate-90' : 'bg-brand-yellow hover:bg-brand-dark'}`}
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
