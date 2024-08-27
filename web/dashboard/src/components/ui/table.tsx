import * as React from "react"

import {cn} from "@/lib/utils"
import {boolean} from "zod";

const Table = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement>
>(({className, ...props}, ref) => (
  <div className={`w-full overflow-auto border-[0.7px] rounded-[12px] transition-colors`}>
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-base', className)}
            {...props}
        />
    </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
    <thead ref={ref} className={cn('bg-accent', className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
    <tbody
        ref={ref}
        className={cn("dark:bg-transparent", className)}
        {...props}
    />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
    <tfoot
        ref={ref}
        className={cn("bg-primary font-medium text-primary-foreground", className)}
        {...props}
    />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement> & { highlightSelected?: boolean }
>(({className, highlightSelected = true, ...props}, ref) => (
    <tr
        ref={ref}
        className={cn(
            "h-[60px] transition-colors border",
            className
        )}
        {...props}
    />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref) => (
    <th
        ref={ref}
        className={cn(
            "px-10 py-5 text-left align-middle",
            className
        )}
        {...props}
    />
))
TableHead.displayName = "TableHead"

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  columnIndex?: number;
}

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    TableCellProps

>(({className, columnIndex, ...props}, ref) => (
    <td
        ref={ref}
        className={cn(
            "px-10 py-5 align-middle [&_tr:last-child]:border-b",
            columnIndex === 0 && "w-1/4",
            columnIndex === 1 && "w-1/3",
            className
        )}
        {...props}
    />

))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>(({className, ...props}, ref) => (
    <caption
        ref={ref}
        className={cn("mt-4 text-sm text-muted-foreground", className)}
        {...props}
    />
))
TableCaption.displayName = "TableCaption"

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
}
