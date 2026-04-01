"use client";
import { useState, useEffect } from "react";
import { Star, Send, CheckCircle2, AlertCircle, User } from "lucide-react";
import { useAuth } from "@clerk/nextjs";

interface Review {
  _id: string;
  assetId: string;
  user?: {
    name: string;
  };
  rating: number;
  comment: string;
  createdAt: string;
}

export const ReviewSection = ({ assetId }: { assetId: string }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, msg: "", type: "success" });

  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => setToast({ ...toast, show: false }), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Fetch Reviews on Load
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews/${assetId}`)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success) {
          setReviews(resData.data);
        } else {
          setReviews([]);
        }
      })
      .catch(() => setReviews([]));
  }, [assetId]);

  const handlePost = async () => {
    if (!isSignedIn) {
      return setToast({
        show: true,
        msg: "Please login with Clerk!",
        type: "error",
      });
    }

    if (!comment.trim())
      return setToast({ show: true, msg: "Type something!", type: "error" });

    setLoading(true);
    try {
      const token = await getToken();
      console.log("token", token);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      const response = await fetch(`${apiUrl}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          assetId: "your_asset_id",
          rating: 5,
          comment: "Great tool!",
        }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setReviews((prev) => [resData.data, ...prev]);
        setComment("");
        setToast({
          show: true,
          msg: "Review synced with database!",
          type: "success",
        });
      } else {
        setToast({ show: true, msg: "Failed to post review.", type: "error" });
      }
    } catch (err) {
      console.error("Review post error:", err);
      setToast({ show: true, msg: "Network error!", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 space-y-10 relative">
      {/* --- TOAST UI --- */}
      {toast.show && (
        <div
          className={`fixed top-10 right-10 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl border backdrop-blur-3xl shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300 ${
            toast.type === "success"
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
              : "bg-red-500/10 border-red-500/20 text-red-400"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span className="font-bold text-sm tracking-tight">{toast.msg}</span>
        </div>
      )}

      {/* Input Box */}
      <div className="bg-white/[0.03] p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
        <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest text-secondary">
          Neural Feedback
        </h3>
        <div className="flex gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              className={`w-6 h-6 cursor-pointer transition-all ${s <= rating ? "fill-amber-400 text-amber-400 scale-110" : "text-white/10"}`}
              onClick={() => setRating(s)}
            />
          ))}
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full bg-background border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-primary/50 transition-all min-h-[120px]"
          placeholder="Sync your experience..."
        />
        <button
          onClick={handlePost}
          disabled={loading || !isSignedIn}
          className={`mt-6 bg-primary px-10 py-4 rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-indigo-500 transition-all active:scale-95 shadow-xl shadow-primary/20 ${!isSignedIn && "opacity-30 cursor-not-allowed"}`}
        >
          {loading
            ? "Processing..."
            : isSignedIn
              ? "Deploy Review"
              : "Login Required"}
          <Send className={`w-4 h-4 ${loading && "animate-pulse"}`} />
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.length > 0 ? (
          reviews.map((rev) => (
            <div
              key={rev._id}
              className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] flex gap-5 group hover:bg-white/[0.04] transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 shrink-0">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-black text-white text-sm">
                    {rev.user?.name || "User"}
                  </h4>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                    {rev.createdAt
                      ? new Date(rev.createdAt).toLocaleDateString()
                      : "Just now"}
                  </span>
                </div>
                <div className="flex gap-0.5 mt-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-2.5 h-2.5 ${i < rev.rating ? "fill-amber-400 text-amber-400" : "text-white/10"}`}
                    />
                  ))}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {rev.comment}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-slate-600 font-bold uppercase text-[10px] tracking-widest py-10">
            No neural feedback yet.
          </p>
        )}
      </div>
    </div>
  );
};
