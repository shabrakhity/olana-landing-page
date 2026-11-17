import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="border-t border-border mt-24" dir="rtl">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2 mb-4">
                            <Image 
                                src="/olana-logo.png" 
                                alt="Olana FZE" 
                                width={120} 
                                height={35} 
                                className="h-9 w-auto object-contain" 
                            />
                            <span className="text-lg font-bold text-foreground">FZE</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-2 font-medium">
                            Olana FZE - CRM System
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            نظام مبيعات ذكي لشركات الأثاث والمفروشات. بنساعدك تنظم شغلك وتمنع ضياع أي عميل.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                            المنتج
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    الميزات
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    الأسعار
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    الأسئلة الشائعة
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                            الشركة
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    عن Olana
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    اتصل بنا
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                            الشروط والأحكام
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    سياسة الخصوصية
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    شروط الاستخدام
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                        © {new Date().getFullYear()} Olana FZE. جميع الحقوق محفوظة.
                    </p>
                </div>
            </div>
        </footer>
    );
};