import Craft from "@/components/crafts/stepper";

export default function CraftsPage() {
    return (
            <div className="flex items-center justify-center min-h-screen relative overflow-hidden">
                <PreviewCard title="Crafts">
                    <Craft />
                </PreviewCard>
            </div>
    )
} 


function PreviewCard({ title ,  children }: { title: string; children: React.ReactNode }) {
            return <div className="bg-background-foreground rounded-xl border border-muted-foreground max-w-2xl w-full h-96 ">
    <div className="bg-stone-700 px-2 h-12 flex items-center border-b border-muted-foreground rounded-t-xl">
            <h2 className="font-semibold text-lg mb-2">{title}</h2>
        </div>
        <div className="bg-stone-900 h-[calc(100%-3rem)] rounded-b-xl p-4 overflow-auto">
            {children}
        </div>
    </div>
}