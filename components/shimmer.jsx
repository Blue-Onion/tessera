import { FileText, BarChart2 } from 'lucide-react'
import React from 'react'
import { Skeleton } from './ui/skeleton'

const Shimmer = () => {
    return (
        <div className="space-y-24 ">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="h-12 w-12 bg-purple-300 rounded-full flex justify-center items-center mb-4">
                        <FileText className="h-5 w-5 text-[#480CC3]" />
                    </div>
                    <h3 className="text-2xl font-bold">
                        Interactive Code Editor
                    </h3>
                    <p className="text-lg text-purple-300">
                        Power your creativity with Tessera’s editor featuring:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-[#480CC3]" />
                            <span>
                                Write & modify Manim code directly
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-[#480CC3]" />
                            <span>
                                Real-time code preview
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="space-y-4 bg-muted/40 rounded-2xl shadow-xl p-6 border border-purple-900/20">
                    <div className="flex gap-2 mb-6">
                        <div className="rounded h-8 w-8 bg-purple-300" />
                        <div className="rounded h-8 w-8 bg-purple-300" />
                        <div className="rounded h-8 w-8 bg-purple-300" />
                    </div>
                    <Skeleton className={"bg-purple-300 h-4 w-2/3"} />
                    <Skeleton className={"bg-purple-300 h-4 w-full"} />
                    <Skeleton className={"bg-purple-300 h-4 w-3/4"} />
                    <Skeleton className={"bg-purple-300 h-4 w-1/3"} />
                </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12">
                <div className="space-y-4 bg-muted/40 rounded-2xl shadow-xl p-6 border border-purple-900/20">
                    <div className="flex gap-2 mb-6">
                        <Skeleton className="rounded-lg w-full h-40 bg-purple-300" />
                    </div>
                    <div className="flex justify-between">
                        <Skeleton className={"bg-purple-300 h-8 w-14"} />
                        <Skeleton className={"bg-purple-300 h-8 w-14"} />
                        <Skeleton className={"bg-purple-300 h-8 w-14"} />
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="h-12 w-12 bg-purple-300 rounded-full flex justify-center items-center mb-4">
                        <BarChart2 className="h-5 w-5 text-[#480CC3]" />
                    </div>
                    <h3 className="text-2xl font-bold">
                        Visualization Insights
                    </h3>
                    <p className="text-lg text-purple-300">
                        Unlock the full potential of your animations with:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-[#480CC3]" />
                            <span>
                                Auto-generated visual patterns
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-[#480CC3]" />
                            <span>
                                Exportable charts & timelines
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Shimmer
