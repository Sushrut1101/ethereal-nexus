import React from 'react';
import {Button} from "@/components/ui/button";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

export default function History() {
    const timelineItemStyles = {
        "&:before": {
            display: "none",
        }
    };

    return (
        <div className="col-span-2">
            <div className="relative bg-white p-4 shadow h-full rounded-lg">
                <span className="font-bold ml-4">History</span>
                <div className="mt-3">
                    <Timeline position="right">
                        <TimelineItem sx={timelineItemStyles}>
                            <TimelineSeparator>
                                <span className="border border-grey-base rounded-3xl w-20 h-10 flex justify-center items-center text-grey-light">15 Maio</span>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent/>
                        </TimelineItem>
                        <TimelineItem className="ml-8" sx={timelineItemStyles}>
                            <TimelineSeparator>
                                <div className="bg-orange-base w-4 h-4 rounded-full"></div>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <div className="mt-n55">
                                <TimelineContent>
                                    Events widget added to Components Event Widget
                                </TimelineContent>
                            </div>
                        </TimelineItem>
                        <TimelineItem sx={timelineItemStyles}>
                            <TimelineSeparator>
                                <span className="border bg-grey-base rounded-3xl w-20 h-10 flex justify-center items-center text-grey-light">15 Maio</span>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent/>
                        </TimelineItem>
                        <TimelineItem className="ml-8" sx={timelineItemStyles}>
                            <TimelineSeparator>
                                <div className="bg-grey-base w-4 h-4 rounded-full"></div>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <div className="mt-n55">
                                <TimelineContent>
                                    Events widget added to Components Event Widget
                                </TimelineContent>
                            </div>
                        </TimelineItem>
                        <TimelineItem className="ml-8" sx={timelineItemStyles}>
                            <TimelineSeparator>
                                <div className="bg-grey-base w-4 h-4 rounded-full"></div>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <div className="mt-n55">
                                <TimelineContent>
                                    Events widget added to Components Event Widget
                                </TimelineContent>
                            </div>
                        </TimelineItem>
                    </Timeline>
                </div>
                <Button variant="text"
                        className="absolute bottom-4 right-4 text-orange-base font-bold text-base pl-1">
                    View all history
                </Button>
            </div>
        </div>
    );
}
