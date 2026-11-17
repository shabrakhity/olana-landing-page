import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

// هنا بنعرض "قصص" أو "حالات" حقيقية بنحلها، مش آراء وهمية.
const stories = [
    {
        name: "معرض أثاث - دبي",
        username: "قبل Olana",
        body: "كنا بنستقبل أكتر من 100 رسالة واتساب في اليوم، ونصهم كان بيضيع لأن السيلز بينسى يرد. دلوقتي كل ليد ليه مسؤول ومتابعة.",
        img: "",
    },
    {
        name: "شركة عقارات - الشارقة",
        username: "قبل Olana",
        body: "كان عندنا مشكلة إن الوحدات المتاحة بتتوه بين الإعلانات والواتساب. دلوقتي المحفظة العقارية واضحة، وكل وحدة ليها حالة.",
        img: "",
    },
    {
        name: "مصنع مطابخ - أبوظبي",
        username: "قبل Olana",
        body: "العميل كان بيدفع مقدم ويختفي. مكنش فيه نظام يتابع. دلوقتي الـ Zero Lost Leads بيضمن إن مفيش عميل ينسى.",
        img: "",
    },
    {
        name: "معرض أثاث - عجمان",
        username: "قبل Olana",
        body: "كنا بنعتمد على الذاكرة في المتابعة. دلوقتي النظام بيفكرنا، وشاشة متابعات اليوم بتخلينا نبدأ يومنا صح.",
        img: "",
    },
    {
        name: "شركة تطوير عقاري - دبي",
        username: "قبل Olana",
        body: "المدير كان مش عارف مين السيلز اللي بيشتغل ومين لأ. دلوقتي التقارير بتوضح كل حاجة بالأرقام.",
        img: "",
    },
    {
        name: "شركة أثاث - دبي",
        username: "قبل Olana",
        body: "كانت الفوضى في توزيع الليدز. دلوقتي كل ليد بيتوزع على السيلز الصح، وفي تاريخ متابعة إجباري.",
        img: "",
    },
]

const firstRow = stories.slice(0, stories.length / 2)
const secondRow = stories.slice(stories.length / 2)

const StoryCard = ({
    name,
    username,
    body,
}: {
    name: string
    username: string
    body: string
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
                "border-border bg-card shadow-sm",
                "dark:border-border dark:bg-card"
            )}
        >
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                     <Avatar className="size-12 shrink-0 bg-primary/10 text-primary">
                        <AvatarFallback className="text-lg font-bold">
                            {name.split(' ')[0].charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <figcaption className="text-base font-bold text-foreground">
                            {name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">{username}</p>
                    </div>
                </div>
                <blockquote className="text-sm text-muted-foreground leading-relaxed">
                    {body}
                </blockquote>
            </div>
        </figure>
    )
}

export function TestimonialSection() {
    return (
        <div id="testimonials" className="max-w-7xl mx-auto py-24 sm:py-32" dir="rtl">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                    مشاكل بنحلها كل يوم
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    إحنا مش بس بنسجل بيانات، إحنا بنحل مشاكل حقيقية بتواجه شركات المبيعات كل يوم.
                </p>
            </div>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
                <Marquee pauseOnHover className="[--duration:30s]">
                    {firstRow.map((story) => (
                        <StoryCard key={story.name} {...story} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:30s]">
                    {secondRow.map((story) => (
                        <StoryCard key={story.name} {...story} />
                    ))}
                </Marquee>
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
            </div>
        </div>
    )
}