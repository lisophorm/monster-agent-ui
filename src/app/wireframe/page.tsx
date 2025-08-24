// app/wireframe/page.tsx
// Self‑contained Phase 2 wireframe page for a brand‑new Next.js (App Router) project.
// Uses only React + Tailwind + lucide-react + framer-motion to avoid extra UI deps.
// After you install deps (see chat), drop this file at app/wireframe/page.tsx.

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Menu,
    Search,
    Bell,
    User,
    Bot,
    BarChart3,
    Database,
    Settings,
    ListChecks,
    Mail,
    Linkedin,
    MessageSquare,
    PlayCircle,
    PauseCircle,
    Plus,
    Filter,
    Eye,
} from "lucide-react";

// --- Mock data ---
const nav = [
    { label: "Dashboard", icon: BarChart3, key: "dashboard" },
    { label: "Leads", icon: Database, key: "leads" },
    { label: "Campaigns", icon: Mail, key: "campaigns" },
    { label: "Draft Assistant", icon: Bot, key: "agent" },
    { label: "Review Queue", icon: ListChecks, key: "review" },
    { label: "Reports", icon: BarChart3, key: "reports" },
    { label: "Settings", icon: Settings, key: "settings" },
];

const kpis = [
    { title: "Leads This Week", value: "128", sub: "+24% vs last wk", progress: 40 },
    { title: "Contacted", value: "84", sub: "65.6% of leads", progress: 65 },
    { title: "Meetings Booked", value: "16", sub: "+5 this wk", progress: 80 },
    { title: "Reply Rate", value: "12.5%", sub: "+1.2pp", progress: 25 },
];

const mockLeads = [
    { company: "Skyline Events", region: "UK", contact: "Alice M.", title: "Head of Events", status: "New", score: 72 },
    { company: "Urban Expo", region: "EU", contact: "Marco F.", title: "Producer", status: "Contacted", score: 65 },
    { company: "Desert Arena", region: "ME", contact: "Layla K.", title: "Ops Manager", status: "Qualified", score: 81 },
    { company: "BigTop Live", region: "US", contact: "Chris D.", title: "Booker", status: "New", score: 58 },
];

const reviewItems = [
    { id: 1, channel: "Email", snippet: "Hi Alice — huge inflatable obstacle course...", risk: "Low", locale: "UK" },
    { id: 2, channel: "LinkedIn", snippet: "Hey Marco, loved your work at...", risk: "Medium", locale: "EU" },
    { id: 3, channel: "WhatsApp", snippet: "Hello Layla, quick one about Q4 dates...", risk: "High", locale: "ME" },
];

export default function Page() {
    const [active, setActive] = React.useState("dashboard");

    return (
        <div className="w-full min-h-screen bg-neutral-50 text-neutral-900">
            {/* Shell */}
            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] min-h-screen">
                {/* Sidebar */}
                <aside className="hidden md:flex flex-col gap-4 border-r bg-white p-4">
                    <div className="flex items-center gap-2">
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="size-9 rounded-2xl bg-neutral-900" />
                        <div>
                            <div className="text-lg font-semibold leading-none">The Monster</div>
                            <div className="text-xs text-neutral-500">Phase 2 Wireframe</div>
                        </div>
                    </div>
                    <nav className="mt-6 flex flex-col gap-1">
                        {nav.map((n) => (
                            <button
                                key={n.key}
                                onClick={() => setActive(n.key)}
                                className={`flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition hover:bg-neutral-100 ${active === n.key ? "bg-neutral-900 text-white hover:bg-neutral-900" : ""}`}
                            >
                                <n.icon className="size-4" />
                                <span>{n.label}</span>
                            </button>
                        ))}
                    </nav>
                    <div className="mt-auto p-3 rounded-2xl bg-neutral-100">
                        <div className="text-sm font-medium">Quick Actions</div>
                        <div className="mt-2 flex flex-col gap-2">
                            <GhostButton icon={Plus}>New Lead</GhostButton>
                            <GhostButton icon={PlayCircle}>Start Cadence</GhostButton>
                            <GhostButton icon={PauseCircle}>Pause All</GhostButton>
                        </div>
                    </div>
                </aside>

                {/* Main */}
                <main className="flex flex-col">
                    {/* Topbar */}
                    <header className="sticky top-0 z-10 flex items-center gap-3 border-b bg-white px-4 py-3">
                        <button className="md:hidden p-2 rounded-xl hover:bg-neutral-100"><Menu className="size-5" /></button>
                        <div className="relative w-full max-w-xl">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
                            <input placeholder="Search leads, companies, messages..." className="pl-10 w-full rounded-2xl border px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300" />
                        </div>
                        <button className="p-2 rounded-xl hover:bg-neutral-100"><Bell className="size-5" /></button>
                        <div className="flex items-center gap-2 rounded-2xl border px-2 py-1">
                            <User className="size-4" />
                            <span className="text-sm">Alfonso</span>
                        </div>
                    </header>

                    {/* Content */}
                    <section className="p-4">
                        {/* Hidden tabs list: we switch via state */}

                        {active === "dashboard" && <Dashboard />}
                        {active === "leads" && <Leads />}
                        {active === "campaigns" && <Campaigns />}
                        {active === "agent" && <AgentDraftAssistant />}
                        {active === "review" && <ReviewQueue />}
                        {active === "reports" && <Reports />}
                        {active === "settings" && <SettingsPanel />}
                    </section>
                </main>
            </div>
        </div>
    );
}

// --- Sections ---
function Dashboard() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {kpis.map((k) => (
                    <Card key={k.title}>
                        <div className="text-sm text-neutral-500">{k.title}</div>
                        <div className="mt-2 text-3xl font-semibold">{k.value}</div>
                        <div className="text-xs text-neutral-500 mt-1">{k.sub}</div>
                        <Progress value={k.progress} className="mt-3" />
                    </Card>
                ))}
            </div>

            <Card>
                <div className="text-base font-semibold mb-3">Phase 2 Flow Map</div>
                <div className="grid gap-4 md:grid-cols-3">
                    <FlowNode title="Leads / CRM" subtitle="Pipelines by region" icon={Database} />
                    <Arrow />
                    <FlowNode title="AI Enrichment" subtitle="Fill gaps, tag, score" icon={Bot} />
                    <Arrow className="md:col-start-2" />
                    <FlowNode title="Draft Assistant" subtitle="Drafts emails & InMails" icon={Mail} />
                    <Arrow />
                    <FlowNode title="Human Review" subtitle="Approve / edit" icon={Eye} />
                    <Arrow className="md:col-start-2" />
                    <FlowNode title="Automation" subtitle="Email · LinkedIn · WhatsApp" icon={MessageSquare} />
                    <Arrow />
                    <FlowNode title="Tracking & Reports" subtitle="Sync to CRM" icon={BarChart3} />
                </div>
            </Card>
        </div>
    );
}

function Leads() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex gap-2">
                    <input placeholder="Filter by company or contact" className="rounded-2xl border px-3 py-2 w-72" />
                    <OutlineButton icon={Filter}>Filters</OutlineButton>
                </div>
                <div className="flex gap-2">
                    <PrimaryButton icon={Plus}>New Lead</PrimaryButton>
                    <SecondaryButton>Import CSV</SecondaryButton>
                </div>
            </div>
            <Card className="p-0 overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-neutral-100">
                    <tr>
                        {"Company,Region,Contact,Title,Status,Score".split(",").map((h) => (
                            <th key={h} className="text-left px-4 py-3 font-medium text-neutral-600">{h}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {mockLeads.map((l, i) => (
                        <tr key={i} className="border-b hover:bg-neutral-50">
                            <td className="px-4 py-3">{l.company}</td>
                            <td className="px-4 py-3">{l.region}</td>
                            <td className="px-4 py-3">{l.contact}</td>
                            <td className="px-4 py-3">{l.title}</td>
                            <td className="px-4 py-3"><span className="text-xs px-2 py-1 rounded-lg bg-neutral-100 border">{l.status}</span></td>
                            <td className="px-4 py-3">{l.score}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}

function Campaigns() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-lg font-semibold">Cadence Designer</div>
                    <div className="text-sm text-neutral-500">Define multi-channel steps for a sequence.</div>
                </div>
                <PrimaryButton icon={PlayCircle}>Launch Cadence</PrimaryButton>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
                <CadenceStep title="Step 1: Email" icon={Mail} placeholder="Intro email template..." />
                <CadenceStep title="Step 2: LinkedIn" icon={Linkedin} placeholder="Connection note / InMail..." />
                <CadenceStep title="Step 3: WhatsApp" icon={MessageSquare} placeholder="Short follow-up message..." />
            </div>
        </div>
    );
}

function AgentDraftAssistant() {
    return (
        <Card>
            <div className="text-base font-semibold mb-3">AI Draft Assistant (Phase 2)</div>
            <div className="grid gap-3 md:grid-cols-3">
                <input placeholder="Target persona (e.g., Head of Events)" className="rounded-xl border px-3 py-2" />
                <input placeholder="Region (UK/EU/ME/US)" className="rounded-xl border px-3 py-2" />
                <input placeholder="Tone (friendly, formal, energetic)" className="rounded-xl border px-3 py-2" />
            </div>
            <textarea placeholder="Message brief or key points..." className="mt-3 min-h-28 rounded-xl border px-3 py-2" />
            <div className="flex items-center gap-2 mt-3">
                <PrimaryButton icon={Bot}>Generate Draft</PrimaryButton>
                <SecondaryButton>Save Template</SecondaryButton>
            </div>
            <div className="rounded-2xl border p-3 bg-neutral-50 mt-3">
                <div className="text-sm font-medium mb-1">Draft Preview</div>
                <div className="text-sm text-neutral-700">[Agent draft preview will render here]</div>
            </div>
        </Card>
    );
}

function ReviewQueue() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            {reviewItems.map((r) => (
                <Card key={r.id}>
                    <div className="text-sm flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-lg border">{r.channel}</span>
                        <span className="text-xs text-neutral-500">{r.locale}</span>
                        <span className={`ml-auto text-xs ${r.risk === "High" ? "text-red-600" : r.risk === "Medium" ? "text-amber-600" : "text-green-600"}`}>{r.risk} Risk</span>
                    </div>
                    <div className="text-sm text-neutral-700 line-clamp-3 mt-3">{r.snippet}</div>
                    <div className="flex gap-2 mt-3">
                        <SecondaryButton>Edit</SecondaryButton>
                        <PrimaryButton>Approve & Send</PrimaryButton>
                    </div>
                </Card>
            ))}
        </div>
    );
}

function Reports() {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            <Card className="min-h-56">
                <div className="font-semibold">Channel Performance</div>
                <div className="text-sm text-neutral-500 mt-2">[Chart placeholder]</div>
            </Card>
            <Card className="min-h-56">
                <div className="font-semibold">Funnel Conversion</div>
                <div className="text-sm text-neutral-500 mt-2">[Chart placeholder]</div>
            </Card>
        </div>
    );
}

function SettingsPanel() {
    const items = [
        { name: "CRM", status: "Connected" },
        { name: "Email (Smartlead/Instantly)", status: "Connected" },
        { name: "LinkedIn", status: "Pending" },
        { name: "WhatsApp", status: "Planned" },
        { name: "Zapier/Make", status: "Connected" },
        { name: "AI Model", status: "Connected" },
    ];
    return (
        <Card>
            <div className="text-base font-semibold mb-3">Integrations</div>
            <div className="grid gap-3 md:grid-cols-3">
                {items.map((it) => (
                    <div key={it.name} className="rounded-2xl border p-4 bg-white flex items-center justify-between">
                        <div>
                            <div className="text-sm font-medium">{it.name}</div>
                            <div className={`text-xs ${it.status === "Connected" ? "text-green-600" : it.status === "Pending" ? "text-amber-600" : "text-neutral-500"}`}>{it.status}</div>
                        </div>
                        <OutlineButton>Configure</OutlineButton>
                    </div>
                ))}
            </div>
        </Card>
    );
}

// --- UI primitives (tailwind only) ---
function Card({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
    return <div className={`rounded-2xl border bg-white p-4 shadow-sm ${className}`}>{children}</div>;
}
function GhostButton({ children, icon: Icon }: React.PropsWithChildren<{ icon?: any }>) {
    return (
        <button className="justify-start gap-2 rounded-xl px-3 py-2 text-sm inline-flex items-center hover:bg-neutral-200">
            {Icon && <Icon className="size-4" />}
            {children}
        </button>
    );
}
function PrimaryButton({ children, icon: Icon }: React.PropsWithChildren<{ icon?: any }>) {
    return (
        <button className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-3 py-2 text-sm text-white hover:bg-black">
            {Icon && <Icon className="size-4" />}
            {children}
        </button>
    );
}
function SecondaryButton({ children }: React.PropsWithChildren) {
    return <button className="rounded-xl border px-3 py-2 text-sm bg-white hover:bg-neutral-50">{children}</button>;
}
function OutlineButton({ children, icon: Icon }: React.PropsWithChildren<{ icon?: any }>) {
    return (
        <button className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm bg-white hover:bg-neutral-50">
            {Icon && <Icon className="size-4" />}
            {children}
        </button>
    );
}
function Progress({ value, className = "" }: { value: number; className?: string }) {
    return (
        <div className={`h-2 w-full rounded-full bg-neutral-200 ${className}`}>
            <div className="h-2 rounded-full bg-neutral-900" style={{ width: `${value}%` }} />
        </div>
    );
}
function FlowNode({ title, subtitle, icon: Icon }: { title: string; subtitle?: string; icon: any }) {
    return (
        <div className="rounded-2xl border bg-white p-4 shadow-sm flex items-start gap-3">
            <div className="rounded-xl p-2 border"><Icon className="size-5" /></div>
            <div>
                <div className="text-sm font-medium">{title}</div>
                {subtitle && <div className="text-xs text-neutral-500">{subtitle}</div>}
            </div>
        </div>
    );
}
function Arrow({ className = "" }) {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className="w-10 h-10 rounded-full border flex items-center justify-center">→</div>
        </div>
    );
}
function CadenceStep({ title, icon: Icon, placeholder }: { title: string; icon: any; placeholder: string }) {
    return (
        <Card>
            <div className="text-sm flex items-center gap-2 font-medium"><Icon className="size-4" />{title}</div>
            <div className="grid gap-3 md:grid-cols-2 mt-3">
                <input placeholder="Delay (e.g., 1 day)" className="rounded-xl border px-3 py-2" />
                <input placeholder="Condition (e.g., no reply)" className="rounded-xl border px-3 py-2" />
            </div>
            <textarea placeholder={placeholder} className="min-h-28 rounded-xl border px-3 py-2 mt-3" />
            <div className="flex gap-2 mt-3">
                <SecondaryButton>Save Step</SecondaryButton>
                <PrimaryButton>Test Step</PrimaryButton>
            </div>
        </Card>
    );
}
