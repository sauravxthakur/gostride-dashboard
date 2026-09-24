"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import data from "./data.json"
import { ChartBarDefault } from "@/components/chart-bar-default"
import { ChartPieSimple } from "@/components/chart-pie-simple"
import { ChartPieLabelCustom } from "@/components/chart-pie-label-custom"
import { ChartRadialStacked } from "@/components/chart-radial-stacked"
import { ChartTooltipIcons } from "@/components/chart-tooltip-icons"

function DashboardContent() {
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab") || "Dashboard"

  // Different views based on the selected tab
  const renderContent = () => {
    switch (tab) {
      case "P&L Reports":
        return (
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <h2 className="text-2xl font-bold mb-4">Profit & Loss Reports</h2>
              <ChartAreaInteractive />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-6">
              <ChartBarDefault />
              <ChartPieSimple />
              <ChartRadialStacked />
            </div>
          </div>
        )
      case "Tax Compliance":
      case "VAT Filings":
      case "Corporate Tax":
        return (
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <h2 className="text-2xl font-bold mb-4">{tab}</h2>
            </div>
            <SectionCards />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-6">
              <ChartRadialStacked />
              <ChartPieLabelCustom />
            </div>
          </div>
        )
      case "Document Vault":
      case "Pending Requests":
        return (
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <h2 className="text-2xl font-bold mb-4">Document Vault</h2>
            </div>
            <DataTable data={data} />
          </div>
        )
      case "My Accountant":
        return (
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
            <h2 className="text-2xl font-bold mb-4">Your Dedicated Accountant</h2>
            <div className="p-6 border rounded-xl bg-card text-card-foreground shadow-sm flex items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold">
                SA
              </div>
              <div>
                <h3 className="text-xl font-semibold">Sarah Ali</h3>
                <p className="text-muted-foreground mb-4">Senior Tax Consultant & Bookkeeper</p>
                <div className="flex gap-2">
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm transition-transform hover:scale-105 active:scale-95">Message on WhatsApp</button>
                  <button className="border px-4 py-2 rounded-md font-medium text-sm hover:bg-muted transition-colors">Schedule Call</button>
                </div>
              </div>
            </div>
          </div>
        )
      case "Billing":
        return (
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
            <h2 className="text-2xl font-bold mb-4">Billing & Subscriptions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 border rounded-xl bg-card shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Active Plan</h3>
                <div className="text-3xl font-bold mb-1">AED 500<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                <p className="text-muted-foreground text-sm mb-4">Monthly Bookkeeping (Up to 100 transactions)</p>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]">Update Payment Method</button>
              </div>
              <ChartTooltipIcons />
            </div>
          </div>
        )
      case "Dashboard":
      default:
        return (
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-6">
              <ChartBarDefault />
              <ChartPieSimple />
              <ChartPieLabelCustom />
              <ChartRadialStacked />
              <div className="md:col-span-2 lg:col-span-2">
                <ChartTooltipIcons />
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-muted-foreground">Loading dashboard...</div>}>
      <DashboardContent />
    </Suspense>
  )
}
