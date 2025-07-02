'use client';

import React from 'react';
import { MessageCircle, Phone, Mail, Ticket } from 'lucide-react';
// import { useChatbot } from '@/contexts/ChatbotContext';

type ContactOption = {
  icon: React.ElementType;
  title: string;
  description: string;
  href?: string;
  action?: () => void;
  gradient: string;
};

export default function SupportPage() {
  // const { openChatbot } = useChatbot();

  const contactOptions: ContactOption[] = [

    {
      icon: Phone,
      title: 'Call us',
      description: 'Speak directly with our support team',
      href: 'tel:+18005551234',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      title: 'Email us',
      description: 'Send us a detailed message',
      href: 'mailto:commms@bleaum.io',
      gradient: 'from-purple-500 to-pink-500',
    },
   
  ];

  return (
    <div className="pt-16 md:pt-20 pb-8 md:pb-12 px-4 min-h-screen font-inter" style={{ background: '#020917' }}>
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full">
          {/* Header Section */}
          <div className="text-center mb-16 pt-8 md:pt-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight font-inter mb-6">
              Connect with Bleaum Support
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose your preferred way to get in touch with our support team. We&apos;re here to help!
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl mx-auto justify-items-center">
            {contactOptions.map((option, index) => {
              const Tag = option.href ? 'a' : 'div';
              const props = option.href
                ? { href: option.href, target: '_blank', rel: 'noopener noreferrer' }
                : option.action
                ? { onClick: option.action }
                : {};
              const Icon = option.icon;
              return (
                <Tag
                  key={index}
                  {...props}
                  className="group w-full"
                >
                  <div className="h-full min-h-[200px] flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur border border-gray-700/50 rounded-2xl p-8 transition-all duration-200 hover:border-blue-400/60 hover:shadow-2xl shadow-lg">
                    <div className={`w-12 h-12 bg-gradient-to-r ${option.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-inter group-hover:text-blue-400 transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-inter">
                      {option.description}
                    </p>
                  </div>
                </Tag>
              );
            })}
          </div>

          {/* Additional Support Info */}
          <div className="mt-16 max-w-6xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-inter">Support Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 font-inter">Customer Support</h3>
                <p className="text-gray-400 font-inter">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                <p className="text-gray-400 font-inter">Saturday: 09:00 AM - 2:00 PM EST</p>
                <p className="text-gray-400 font-inter">Sunday: 09:00 AM - 2:00 PM EST</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 font-inter">Emergency Support</h3>
                <p className="text-gray-400 font-inter">Available 24/7 for critical system issues</p>
                {/* <p className="text-gray-400 font-inter">Call: 3054386038</p> */}
                <p className="text-gray-400 font-inter">Email: comms@bleaum.io</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 