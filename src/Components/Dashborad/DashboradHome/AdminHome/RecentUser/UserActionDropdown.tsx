import React from "react";
import {
    MoreVertical,
    ShieldCheck,
    User,
    Trash2,
    CircleSlash,
} from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import useAuth from "@/hook/useAuth";
import useAxiosSecure from "@/hook/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";

const roles = [
    { label: "Admin", value: "admin", icon: ShieldCheck },
    { label: "Customer", value: "customer", icon: User },
];

interface userActionDropdownProps {
    email: string;
    currentStatus: string;
    refetch: () => void
}

const UserActionDropdown = ({
    email,
    currentStatus,
    refetch
}: userActionDropdownProps) => {


    const queryClient = useQueryClient()

    const { role } = useAuth();

    const axiosSecure = useAxiosSecure();

    // HanldeChange Role by Admin
    const handleChangeRole = async ({ email, newRole, }: { email: string; newRole: string; }) => {
        try {
            if (role !== "admin") {
                toast.error("You are unauthorized update this role");
                return;
            }

            const requestData = {
                email,
                newRole,
            };

            const res = await axiosSecure.patch("/users/updateRole", requestData);

            if (res.status === 200 && res.data.success === true) {
                toast.success(res.data.message);
            }
        } catch (er: unknown) {
            if (axios.isAxiosError(er)) {
                const errorMessage =
                    er.response?.data?.message || "Something went wrong!";
                toast.error(errorMessage);
                console.log("Handle Change Role ERRROR:", errorMessage);
            } else if (er instanceof Error) {
                toast.error(er.message);
                console.log("Handle Change Role ERRROR:", er.message);
            } else {
                toast.error("An unexpected error occurred.");
                console.log("An unexpected error occurred.");
            }
        }
    };

    // Handle Banned User Function by admin
    const hanldeBanUser = async ({ email, statusVal, }: { email: string; statusVal: string; }) => {
        try {

            if (role !== 'admin') {
                toast.error('Your Are Not Authorized for this action')
                return;
            };

            const reqData = {
                email,
                statusVal
            }

            const res = await axiosSecure.patch('/users/bannedorActive', reqData)

            if (res.status === 200 && res.data.success === true) {
                await queryClient.invalidateQueries({
                    queryKey: ['dashboard-data']
                })
                refetch()
                toast.success(`${statusVal} Successfully!`)
            }

            (document.activeElement as HTMLElement)?.blur();

        } catch (er: unknown) {
            if (axios.isAxiosError(er)) {
                const errorMessage =
                    er.response?.data?.message || "Something went wrong!";
                toast.error(errorMessage);
                console.log("Handle Change Role ERRROR:", errorMessage);
            } else if (er instanceof Error) {
                toast.error(er.message);
                console.log("Handle Change Role ERRROR:", er.message);
            } else {
                toast.error("An unexpected error occurred.");
                console.log("An unexpected error occurred.");
            }
        }
    };

    return (
        <div className="flex items-center gap-2">
            <div className="dropdown dropdown-top  dropdown-end">
                <div tabIndex={0} role="button" className={`btn btn-sm btn-ghost `}>
                    <MoreVertical size={18} />
                </div>

                <ul className="dropdown-content space-y-1 z-50 menu p-2 shadow-xl bg-base-100 rounded-xl w-48 border border-base-200">
                    {/* Role Management Group */}
                    <div className="px-2 py-1">
                        <h5 className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">
                            Assign Role
                        </h5>
                    </div>
                    {roles.map((role) => (
                        <li key={role.value}>
                            <button
                                onClick={() => handleChangeRole({ email, newRole: role.value })}
                            >
                                <role.icon size={16} /> {role.label}
                            </button>
                        </li>
                    ))}

                    <div className="border-t border-base-200 my-1"></div>

                    {/* Danger Zone Group */}

                    <div className="px-2 py-1">
                        <h5 className="text-[10px] uppercase font-bold text-red-400 tracking-wider">
                            Danger Zone
                        </h5>
                    </div>

                    <li>
                        {currentStatus?.trim() === "banned" ? (
                            <button
                                onClick={() => hanldeBanUser({ email, statusVal: "active" })}
                                className="text-emerald-600 hover:bg-emerald-50"
                            >
                                <CircleSlash size={16} /> Activate Account
                            </button>
                        ) : (
                            <button
                                onClick={() => hanldeBanUser({ email, statusVal: "banned" })}
                                className="text-amber-600 hover:bg-amber-50"
                            >
                                <CircleSlash size={16} /> Ban Account
                            </button>
                        )}
                    </li>

                    <li>
                        <button
                            onClick={() => handleDeleteUser(email)}
                            className="text-red-600 hover:bg-red-50"
                        >
                            <Trash2 size={16} /> Delete User
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserActionDropdown;
