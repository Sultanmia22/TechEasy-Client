
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import type { IRecentOrder } from "@/types/dashborad.interface";

const Order = ({ order }: { order: IRecentOrder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const items = order?.items || [];
  const firstItem = items[0];

  return (
    <div className="bg-base-100 rounded-xl border border-base-300 overflow-hidden transition-all duration-300">

      {/* 🔹 Top Row */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-base-200 select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-14 shrink-0">
            <Image
              src={firstItem?.image}
              alt={firstItem?.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <h4 className="font-bold text-sm md:text-base flex items-center gap-2">
              {firstItem?.name}
              {items.length > 1 && (
                <span className="badge badge-primary badge-sm">
                  +{items.length - 1} more
                </span>
              )}
            </h4>

            <p className="text-xs opacity-60">
              Order ID: #{order._id.slice(-6).toUpperCase()}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-bold text-sm text-primary">
              Tk {order.totalPrice.toLocaleString()}
            </p>

            <span
              className={`text-xs font-semibold uppercase ${
                order.devliveredStatus === "delivered"
                  ? "text-secondary"
                  : "text-accent"
              }`}
            >
              {order.devliveredStatus}
            </span>
          </div>

          <FaChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* 🔹 Accordion */}
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden bg-base-200/50">
          <div className="p-4 border-t border-base-300">

            <p className="text-xs font-semibold mb-3 opacity-70">
              Items in this order:
            </p>

            <div className="flex flex-col gap-3">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-base-100 p-2 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <p className="text-xs font-medium">{item.name}</p>
                      <p className="text-[10px] opacity-60">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-primary">
                    ৳{item.price.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            
            <div className="flex justify-end mt-4">
              <Link
                href={`/dashboard/orders/${order._id}`}
                className="btn btn-sm btn-primary text-white"
              >
                View Details
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;