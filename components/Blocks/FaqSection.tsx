import { HeadsetIcon, LinkIcon, PlusIcon, SettingsIcon, ShieldCheckIcon, SparklesIcon, RefreshCw, Users } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function FaqSection() {
    const items = [
        {
            icon: SparklesIcon,
            title: 'إيه اللي بيفرق Olana CRM عن أي CRM تاني؟',
            content:
                'معظم أنظمة الـ CRM بتجبر السيلز إنه يغير طريقة شغله ويدخل كل حاجة بنفسه. Olana مصمم "بالعكس" — السيلز بيكمل شغله العادي على الواتساب والموبايل، وبيدخل التطبيق ثواني عشان يسجل "إيه اللي حصل". إحنا بننظم شغلك، مش بنعقده. وكمان إحنا متخصصين في شركات الأثاث والمفروشات، فبنفهم المقاسات، الخامات، والتصاميم.'
        },
        {
            icon: ShieldCheckIcon,
            title: 'هل بيانات شركتي وعملائي آمنة؟',
            content:
                'آمنة 100%. إحنا بنستخدم Supabase (المبنية على PostgreSQL) مع تفعيل سياسات أمان صارمة (Row Level Security). ده معناه إن بيانات شركتك معزولة تماماً عن أي شركة تانية على النظام. حتى إحنا كمالكين للنظام، مش بنقدر نشوف بيانات عملائك. كل شركة ليها بيئة مغلقة.'
        },
        {
            icon: Users,
            title: 'هل ينفع أضيف فريق المبيعات بتاعي؟',
            content:
                'أكيد. تقدر تضيف عدد من المستخدمين حسب الباقة (2 في Starter، 5 في Growth، 12 في Business). وكل مستخدم ليه صلاحيات محددة (مدير أو سيلز). المدير بيشوف كل حاجة وتقارير الأداء، والسيلز بيشوف الليدز بتاعته بس. النظام بيضمن إن مفيش ليد بيضيع لأنه بيفرض إن كل ليد عنده مسؤول وتاريخ متابعة.'
        },
        {
            icon: LinkIcon,
            title: 'هل النظام مربوط بالواتساب؟',
            content:
                'حالياً، النظام فيه زر بيوجهك مباشرة لواتساب العميل عشان تبدأ محادثة. لكننا شغالين على تكامل كامل مع WhatsApp Business API (قريباً جداً)، عشان تقدر تستقبل وتبعت الرسائل من داخل التطبيق، وتتسجل المحادثات تلقائياً في سجل العميل.'
        },
        {
            icon: SettingsIcon,
            title: 'هل فيه فترة تجريبية؟ وإيه شروط الإلغاء؟',
            content:
                'أيوه، فيه تجربة مجانية 14 يوم على أي باقة، وبدون الحاجة لبطاقة ائتمان. بعدها تقدر تختار الباقة المناسبة. ومفيش أي عقود طويلة الأجل — تقدر تلغي اشتراكك في أي وقت من الإعدادات، وبياناتك هتظل محفوظة لمدة 30 يوم في حال رغبت في الرجوع.'
        },
        {
            icon: HeadsetIcon,
            title: 'إيه اللي هيحصل لو محتاج مساعدة أو تدريب للفريق؟',
            content:
                'إحنا معاك خطوة بخطوة. في باقة Starter، بتقدر تتواصل معانا عبر واتساب. في باقة Growth، فيه دعم فني ذو أولوية. في باقة Business، بنعملك جلسة تدريب كاملة للفريق (Onboarding) عشان تضمن إن السيلز بتاعك بدأوا يستخدموا النظام صح من أول يوم.'
        }
    ]
    return (
        <div id="faq" className='py-24 sm:py-32' dir="rtl">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
                    الأسئلة الشائعة
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                    كل اللي محتاج تعرفه عن Olana CRM، وإزاي هيساعدك تنظم شغل شركتك وتكبر مبيعاتك.
                </p>
            </div>
            <Accordion className='max-w-4xl mx-auto' defaultValue={['item-1']}>
                {items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className='py-4 **:data-[slot=accordion-trigger-icon]:hidden hover:no-underline'>
                            <span className='flex items-center gap-4 text-right'>
                                <item.icon className='size-5 shrink-0 text-primary' />
                                <span className="text-base font-medium">{item.title}</span>
                            </span>
                            <PlusIcon className='text-muted-foreground pointer-events-none ml-auto size-4 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45' />
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground leading-relaxed text-sm md:text-base pr-9'>
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}