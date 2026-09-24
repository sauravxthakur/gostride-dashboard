"use client"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingUpIcon, TrendingDownIcon, AlertTriangleIcon, CheckCircleIcon } from "lucide-react"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Monthly Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            AED 45,230.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUpIcon />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Solid growth this month <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            +5,000 AED vs last month
          </div>
        </CardFooter>
      </Card>
      
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Monthly Expenses</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            AED 21,500.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingDownIcon />
              -2.0%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Reduced operational costs <TrendingDownIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Mainly payroll & software
          </div>
        </CardFooter>
      </Card>
      
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Net Profit</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            AED 23,730.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <CheckCircleIcon className="size-3 mr-1" />
              Healthy
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Margin is looking strong <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Operating margin at 52%</div>
        </CardFooter>
      </Card>
      
      <Card className="@container/card border-yellow-200 bg-yellow-50/10 dark:border-yellow-900 dark:bg-yellow-900/10">
        <CardHeader>
          <CardDescription className="text-yellow-700 dark:text-yellow-400">Est. VAT Payable</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            AED 2,261.50
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800">
              <AlertTriangleIcon className="size-3 mr-1" />
              Q3 Return
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-yellow-700 dark:text-yellow-400">
            Due in 15 days <AlertTriangleIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Filing via EmaraTax pending</div>
        </CardFooter>
      </Card>
    </div>
  )
}
