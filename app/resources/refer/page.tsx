'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ClipboardListIcon, UserPlusIcon, DollarSignIcon } from 'lucide-react';

export default function BleaumReferralPage() {
  const [activeTab, setActiveTab] = useState('point-of-sale');
  const [formData, setFormData] = useState({
    yourFirstName: '',
    yourLastName: '',
    yourEmail: '',
    yourPhone: '',
    referralFirstName: '',
    referralLastName: '',
    referralEmail: '',
    referralShopName: '',
    referralPhone: '',
    referralState: '',
    referralZip: '',
    referralNotified: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'radio' ? value : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/send-referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, referralType: activeTab }),
      });
      if (response.ok) {
        alert('Referral submitted successfully!');
        setFormData({
          yourFirstName: '',
          yourLastName: '',
          yourEmail: '',
          yourPhone: '',
          referralFirstName: '',
          referralLastName: '',
          referralEmail: '',
          referralShopName: '',
          referralPhone: '',
          referralState: '',
          referralZip: '',
          referralNotified: '',
        });
      } else {
        alert('Failed to submit referral.');
      }
    } catch (error) {
      alert('An error occurred while submitting the referral.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-12 py-10 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
        {/* Left Section - Form */}
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <p className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
            Earn ${activeTab === 'point-of-sale' ? '500' : '200'} for every eligible{' '}
            <span className="font-bold capitalize">{activeTab.replace(/-/g, ' ')}</span> referral
          </p>
          <div className="mt-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-fit grid-cols-2 h-10 sm:h-12 bg-white dark:bg-gray-800 rounded-full p-1 mx-auto border border-gray-200 dark:border-gray-700">
                <TabsTrigger
                  value="point-of-sale"
                  className={`py-1.5 sm:py-2 px-3 sm:px-4 rounded-full text-sm sm:text-base  transition-all duration-300 ${activeTab === 'point-of-sale' ? 'bg-blue-600 text-white dark:bg-blue-600' : 'text-gray-500 dark:text-gray-300'}`}
                >
                  Point of Sale
                </TabsTrigger>
                <TabsTrigger
                  value="ecommerce"
                  className={`py-1.5 px-3 sm:px-4 rounded-full text-sm sm:text-base  transition-all duration-300 ${activeTab === 'ecommerce' ? 'bg-blue-600 text-white dark:bg-blue-600' : 'text-gray-500 dark:text-gray-300'}`}
                >
                  Ecommerce
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Input type="text" name="yourFirstName" value={formData.yourFirstName} onChange={handleChange} placeholder="Your First Name*" required className="h-12 bg-gray-100 border-transparent text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400 dark:border-gray-700" />
              <Input type="text" name="yourLastName" value={formData.yourLastName} onChange={handleChange} placeholder="Your Last Name*" required className="h-12 bg-gray-100 border-transparent text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400 dark:border-gray-700" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Input type="email" name="yourEmail" value={formData.yourEmail} onChange={handleChange} placeholder="Your Email*" required className="h-12 bg-gray-100 border-transparent text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400 dark:border-gray-700" />
              <Input type="tel" name="yourPhone" value={formData.yourPhone} onChange={handleChange} placeholder="Your Phone Number" className="h-12 bg-gray-100 border-transparent text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400 dark:border-gray-700" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Input type="text" name="referralFirstName" value={formData.referralFirstName} onChange={handleChange} placeholder="Referral First Name*" required className="h-12 bg-gray-100 border-transparent text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400 dark:border-gray-700" />
              <Input type="text" name="referralLastName" value={formData.referralLastName} onChange={handleChange} placeholder="Referral Last Name*" required className="h-12 bg-gray-100 border-transparent text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400 dark:border-gray-700" />
            </div>
            <Input type="email" name="referralEmail" value={formData.referralEmail} onChange={handleChange} placeholder="Referral Email*" required className="h-12 bg-gray-100 border-transparent text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400 dark:border-gray-700" />
            <Input type="text" name="referralShopName" value={formData.referralShopName} onChange={handleChange} placeholder="Referral retail shop Name*" required className="h-12 bg-gray-100 border-transparent text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400 dark:border-gray-700" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <Input type="tel" name="referralPhone" value={formData.referralPhone} onChange={handleChange} placeholder="Referral Phone #" className="h-12 bg-gray-100 border-transparent text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400 dark:border-gray-700" />
              <select name="referralState" value={formData.referralState} onChange={handleChange} required className="flex h-12 w-full rounded-md border border-transparent bg-gray-100 px-3 py-2 text-xs sm:text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400 dark:border-gray-700">
                <option value="" className="bg-white text-gray-500 dark:bg-gray-900 dark:text-gray-400">retail shop State*</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <Input type="text" name="referralZip" value={formData.referralZip} onChange={handleChange} placeholder="retail shop Zip" className="h-12 bg-gray-100 border-transparent text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400 dark:border-gray-700" />
            </div>
            <div className="pt-6">
              <p className="text-sm font-medium mb-4 text-gray-700 dark:text-gray-300">Did you let them know you&apos;d be referring their business to us?</p>
              <div className="flex items-center space-x-8">
                <div className="flex items-center">
                  <input type="radio" id="yes" name="referralNotified" value="yes" checked={formData.referralNotified === 'yes'} onChange={handleChange} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700" />
                  <label htmlFor="yes" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Yes</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="no" name="referralNotified" value="no" checked={formData.referralNotified === 'no'} onChange={handleChange} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700" />
                  <label htmlFor="no" className="ml-2 text-sm text-gray-700 dark:text-gray-300">No</label>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <Button type="submit" className="w-full sm:w-auto mx-auto py-4 px-6 sm:px-10 bg-blue-600 hover:bg-blue-400 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 mb-2" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center pt-4">
              By submitting this form, you&apos;re agreeing to receive marketing communications from Bleaum. For information on our privacy practices and commitment to protecting your privacy, please review our{' '}
              <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">privacy policies</Link>.
            </div>
          </form>
        </div>

        {/* Right Section - Referral Bonus */}
        <div className="lg:sticky lg:top-20 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:p-0 rounded-none">
          <div className="max-w-xl lg:max-w-none">
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-4">
              REFERRAL BONUS
            </p>
            <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              Get up to $500 to spread the word about Bleaum.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              If you like Bleaum, tell a friend! You can earn cash for referring new
             retailers to Bleaum. Get $500 for every eligible Point of Sale referral
              and $200 for Ecommerce — complete the form to apply.
            </p>
            <Link href="#how-it-works-section" className="text-blue-600 dark:text-blue-400 font-semibold flex items-center group cursor-pointer hover:text-blue-500 transition-colors">
              How it works
              <svg 
                className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-y-1" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <section id="how-it-works-section" className="container mx-auto px-2 sm:px-4 py-10 sm:py-16">
        <p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2 sm:mb-3">HOW IT WORKS</p>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-6 sm:mb-12">
          Refer a retail shop in minutes and get paid
          <br className="hidden sm:block" />after their first sale.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
              <ClipboardListIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 dark:text-blue-400" />
              <div>
                <p className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400">01</p>
                <h3 className="text-base sm:text-xl font-semibold text-blue-600 dark:text-blue-400">Complete the referral form</h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-white text-xs sm:text-base">
              We need a few basic details about the
              retail shop you refer to start the process.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
              <UserPlusIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 dark:text-blue-400" />
              <div>
                <p className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400">02</p>
                <h3 className="text-base sm:text-xl font-semibold text-gray-900 dark:text-blue-400">Get paid!</h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-white text-xs sm:text-base">
              If your referred account signs up for Bleaum
              within 90 days, we&apos;ll deliver your payment
              when their shop rings in their first sale.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
              <DollarSignIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 dark:text-blue-400" />
              <div>
                <p className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400">03</p>
                <h3 className="text-base sm:text-xl font-semibold text-gray-900 dark:text-blue-400">Keep spreading the word</h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-white text-xs sm:text-base">
              As long as you refer retailers that aren&apos;t
              already in our system, you&apos;ll continue to be
              eligible for more and more bonuses.
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center max-w-3xl mx-auto">
          Referral must be submitted through the online form here. Referred account must be a new lead/account in our system. Referred account must close within 90 days of referral submission. Retail shop owners or key
          decision-makers cannot refer their own shop. Payout in USD/CAD, dependent on referrer&apos;s local currency.
        </p>
      </section>
    </div>
  );
}