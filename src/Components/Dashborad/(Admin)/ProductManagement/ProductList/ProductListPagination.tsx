import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
interface PaginationProps {
  totalPages: number
  currentPage: number
}

const ProductListPagination = ({ totalPages, currentPage }: PaginationProps) => {
  return (
    <div className='flex items-center justify-between border-t border-base-300 px-4 py-4 sm:px-2 mt-4 flex-wrap gap-3'>
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          disabled={currentPage === 1}
          className="disabled:opacity-40 px-4 py-2 border border-base-300 rounded-xl bg-base-100 text-sm font-medium text-base-content hover:bg-base-200 transition-colors"
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          className="disabled:opacity-40 px-4 py-2 border border-base-300 rounded-xl bg-base-100 text-sm font-medium text-base-content hover:bg-base-200 transition-colors"
        >
          Next
        </button>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-neutral">
            Showing Page <span className="font-semibold text-base-content">{currentPage}</span> of{' '}
            <span className="font-semibold text-base-content">{totalPages}</span>
          </p>
        </div>

        <div>
          <nav className="inline-flex gap-1.5 rounded-xl shadow-xs" aria-label="Pagination">
           
            <button
              disabled={currentPage === 1}
              className="disabled:opacity-30 w-9 h-9 flex items-center justify-center border border-base-300 rounded-xl bg-base-100 text-neutral hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const pageNum = index + 1
              const isActive = pageNum === currentPage

              return (
                <button
                  key={pageNum}
                  className={`w-9 h-9 flex items-center justify-center text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? 'bg-primary text-primary-content font-bold shadow-sm' 
                      : 'bg-base-100 border border-base-300 text-base-content hover:border-primary hover:text-primary'
                  }`}
                >
                  {pageNum}
                </button>
              )
            })}

            {/* Right arrow */}
            <button
              disabled={currentPage === totalPages}
              className="disabled:opacity-30 w-9 h-9 flex items-center justify-center border border-base-300 rounded-xl bg-base-100 text-neutral hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default ProductListPagination