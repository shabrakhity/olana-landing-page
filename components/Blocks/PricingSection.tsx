"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Check } from 'lucide-react'
import { useState } from 'react'

const plans = [
    {
        name: 'Starter',
        description: 'مثالي للمعارض الصغيرة والبداية السريعة',
        monthlyPrice: 149,
        yearlyPrice: 119, // خصم 20%
        features: [
            'عدد 2 مستخدم',
            'إدارة ليدز غير محدودة',
            'متابعات يومية (Zero Lost Leads)',
            'سجل تواصل كامل لكل عميل',
            'لوحة تحكم أساسية',
            'دعم فني عبر واتساب'
        ],
        cta: 'ابدأ التجربة المجانية',
        popular: false
    },
    {
        name: 'Growth',
        description: 'لشركات الأثاث اللي عايزة تكبر وتنظم فريقها',
        monthlyPrice: 299,
        yearlyPrice: 239,
        features: [
            'عدد 5 مستخدمين',
            'كل مميزات Starter',
            'تقارير أداء الفريق',
            'نظام الموديولات (Feature Flags)',
            'هوية بصرية (لوجو ولون)',
            'تصدير البيانات (CSV)',
            'دعم فني ذو أولوية'
        ],
        cta: 'ابدأ التجربة المجانية',
        popular: true,
        includesPrevious: 'كل مميزات Starter، بالإضافة إلى'
    },
    {
        name: 'Business',
        description: 'للمصانع والمعارض الكبيرة اللي محتاجة تحكم كامل',
        monthlyPrice: 599,
        yearlyPrice: 479,
        features: [
            'عدد 12 مستخدم',
            'كل مميزات Growth',
            'سجل عمليات (Activity Log)',
            'عروض أسعار (قريباً)',
            'تكامل واتساب (قريباً)',
            'مدير حساب مخصص',
            'تدريب للفريق (Onboarding)'
        ],
        cta: 'تواصل مع المبيعات',
        popular: false,
        includesPrevious: 'كل مميزات Growth، بالإضافة إلى'
    }
]

export function PricingSection() {
    const [isYearly, setIsYearly] = useState(false)

    return (
        <section id="pricing" className="py-24 sm:py-32 border bg-muted/40 rounded-xl" dir="rtl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center mb-12">
                    <Badge variant="outline" className="mb-4">خطط الأسعار</Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        اختر الباقة المناسبة لشغلك
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        ابدأ بتجربة مجانية 14 يوم. بدون بطاقة ائتمان. وبدون التزام.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center mb-2">
                        <ToggleGroup
                            value={[isYearly ? "yearly" : "monthly"]}
                            onValueChange={(value) => setIsYearly(value[0] === "yearly")}
                            className="bg-secondary text-secondary-foreground border-none rounded-full p-1 cursor-pointer shadow-none"
                        >
                            <ToggleGroupItem
                                value="monthly"
                                className="data-pressed:bg-background data-pressed:border-border border-transparent border px-6 !rounded-full data-pressed:text-foreground hover:bg-transparent cursor-pointer transition-colors"
                            >
                                شهري
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="yearly"
                                className="data-pressed:bg-background data-pressed:border-border border-transparent border px-6 !rounded-full data-pressed:text-foreground hover:bg-transparent cursor-pointer transition-colors"
                            >
                                سنوي
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        <span className="text-primary font-semibold">وفر 20%</span> عند الدفع السنوي
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="mx-auto max-w-6xl">
                    <div>
                        <div className="grid lg:grid-cols-3">
                            {plans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`p-8 grid grid-rows-subgrid row-span-4 gap-6 ${plan.popular
                                        ? 'my-2 mx-4 rounded-xl bg-card border-transparent shadow-xl ring-1 ring-foreground/10 backdrop-blur'
                                        : 'my-2 mx-4 rounded-xl bg-muted border scale-99'
                                        }`}
                                >
                                    {/* Plan Header */}
                                    <div>
                                        <div className="text-lg font-medium tracking-tight mb-2">{plan.name}</div>
                                        <div className="text-muted-foreground text-balance text-sm">{plan.description}</div>
                                    </div>

                                    {/* Pricing */}
                                    <div>
                                        <div className="text-4xl font-bold mb-1 flex items-baseline gap-1">
                                            <span className="text-2xl font-normal">AED</span>
                                            {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                        </div>
                                        <div className="text-muted-foreground text-sm">
                                            / شهرياً
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <div>
                                        <Button
                                            className={`w-full cursor-pointer my-2 rounded-full h-9 px-4 ${plan.popular
                                                ? 'shadow-md border-[0.5px] border-white/25 shadow-black/20 bg-primary ring-1 ring-primary/15 text-primary-foreground hover:bg-primary/90'
                                                : 'shadow-sm shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 hover:bg-muted/50'
                                                }`}
                                            variant={plan.popular ? 'default' : 'secondary'}
                                            onClick={() => {
                                                // تقدر تغير الرابط ده لصفحة التسجيل في تطبيقك
                                                window.location.href = '/signup';
                                            }}
                                        >
                                            {plan.cta}
                                        </Button>
                                    </div>


                                    {/* Features */}
                                    <div>
                                        <ul role="list" className="space-y-3 text-sm">
                                            {plan.includesPrevious && (
                                                <li className="flex items-center gap-3 font-medium">
                                                    {plan.includesPrevious}:
                                                </li>
                                            )}
                                            {plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center gap-3">
                                                    <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}