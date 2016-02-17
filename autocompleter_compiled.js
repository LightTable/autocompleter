if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj13311 = {};return obj13311;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__4879__auto__ = port;if(and__4879__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__4879__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__5518__auto__ = (((port == null))?null:port);return (function (){var or__4891__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj13313 = {};return obj13313;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn0_handler){if((function (){var and__4879__auto__ = port;if(and__4879__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__4879__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn0_handler);
} else
{var x__5518__auto__ = (((port == null))?null:port);return (function (){var or__4891__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn0_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj13315 = {};return obj13315;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__4879__auto__ = chan;if(and__4879__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__4879__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__5518__auto__ = (((chan == null))?null:chan);return (function (){var or__4891__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj13317 = {};return obj13317;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__4879__auto__ = h;if(and__4879__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__4879__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__5518__auto__ = (((h == null))?null:h);return (function (){var or__4891__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__4879__auto__ = h;if(and__4879__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__4879__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__5518__auto__ = (((h == null))?null:h);return (function (){var or__4891__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj13319 = {};return obj13319;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__4879__auto__ = b;if(and__4879__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__4879__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__5518__auto__ = (((b == null))?null:b);return (function (){var or__4891__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__4879__auto__ = b;if(and__4879__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__4879__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__5518__auto__ = (((b == null))?null:b);return (function (){var or__4891__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function add_BANG_(b,itm){if((function (){var and__4879__auto__ = b;if(and__4879__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2;
} else
{return and__4879__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(b,itm);
} else
{var x__5518__auto__ = (((b == null))?null:b);return (function (){var or__4891__auto__ = (cljs.core.async.impl.protocols.add_BANG_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.impl.protocols.add_BANG_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.add!",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj13321 = {};return obj13321;
})();
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.buffers')) {
goog.provide('cljs.core.async.impl.buffers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.buffers.acopy = (function acopy(src,src_start,dest,dest_start,len){var cnt = 0;while(true){
if((cnt < len))
{(dest[(dest_start + cnt)] = (src[(src_start + cnt)]));
{
var G__13276 = (cnt + 1);
cnt = G__13276;
continue;
}
} else
{return null;
}
break;
}
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.RingBuffer = (function (head,tail,length,arr){
this.head = head;
this.tail = tail;
this.length = length;
this.arr = arr;
})
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/RingBuffer";
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async.impl.buffers/RingBuffer");
});
cljs.core.async.impl.buffers.RingBuffer.prototype.pop = (function (){var self__ = this;
var _ = this;if((self__.length === 0))
{return null;
} else
{var x = (self__.arr[self__.tail]);(self__.arr[self__.tail] = null);
self__.tail = ((self__.tail + 1) % self__.arr.length);
self__.length = (self__.length - 1);
return x;
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unshift = (function (x){var self__ = this;
var _ = this;(self__.arr[self__.head] = x);
self__.head = ((self__.head + 1) % self__.arr.length);
self__.length = (self__.length + 1);
return null;
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unbounded_unshift = (function (x){var self__ = this;
var this$ = this;if(((self__.length + 1) === self__.arr.length))
{this$.resize();
} else
{}
return this$.unshift(x);
});
cljs.core.async.impl.buffers.RingBuffer.prototype.resize = (function (){var self__ = this;
var _ = this;var new_arr_size = (self__.arr.length * 2);var new_arr = (new Array(new_arr_size));if((self__.tail < self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,self__.length);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail > self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,(self__.arr.length - self__.tail));
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,0,new_arr,(self__.arr.length - self__.tail),self__.head);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail === self__.head))
{self__.tail = 0;
self__.head = 0;
return self__.arr = new_arr;
} else
{return null;
}
}
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.cleanup = (function (keep_QMARK_){var self__ = this;
var this$ = this;var n__5739__auto__ = self__.length;var x = 0;while(true){
if((x < n__5739__auto__))
{var v_13277 = this$.pop();if(keep_QMARK_.call(null,v_13277))
{this$.unshift(v_13277);
} else
{}
{
var G__13278 = (x + 1);
x = G__13278;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.async.impl.buffers.__GT_RingBuffer = (function __GT_RingBuffer(head,tail,length,arr){return (new cljs.core.async.impl.buffers.RingBuffer(head,tail,length,arr));
});
cljs.core.async.impl.buffers.ring_buffer = (function ring_buffer(n){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't create a ring buffer of size 0"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,"n","n",-1640531417,null),0)))].join('')));
}
return (new cljs.core.async.impl.buffers.RingBuffer(0,0,0,(new Array(n))));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.FixedBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/FixedBuffer";
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (self__.buf.length === self__.n);
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,this$__$1)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't add to a full buffer"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol("impl","full?","impl/full?",-1337857039,null),new cljs.core.Symbol(null,"this","this",-1636972457,null)))))].join('')));
}
return self__.buf.unshift(itm);
});
cljs.core.async.impl.buffers.__GT_FixedBuffer = (function __GT_FixedBuffer(buf,n){return (new cljs.core.async.impl.buffers.FixedBuffer(buf,n));
});
cljs.core.async.impl.buffers.fixed_buffer = (function fixed_buffer(n){return (new cljs.core.async.impl.buffers.FixedBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.DroppingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/DroppingBuffer";
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{return null;
} else
{return self__.buf.unshift(itm);
}
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_DroppingBuffer = (function __GT_DroppingBuffer(buf,n){return (new cljs.core.async.impl.buffers.DroppingBuffer(buf,n));
});
cljs.core.async.impl.buffers.dropping_buffer = (function dropping_buffer(n){return (new cljs.core.async.impl.buffers.DroppingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.SlidingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/SlidingBuffer";
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{cljs.core.async.impl.protocols.remove_BANG_.call(null,this$__$1);
} else
{}
return self__.buf.unshift(itm);
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_SlidingBuffer = (function __GT_SlidingBuffer(buf,n){return (new cljs.core.async.impl.buffers.SlidingBuffer(buf,n));
});
cljs.core.async.impl.buffers.sliding_buffer = (function sliding_buffer(n){return (new cljs.core.async.impl.buffers.SlidingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.dispatch')) {
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.dispatch.message_channel = null;
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,32);
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = 1024;
cljs.core.async.impl.dispatch.process_messages = (function process_messages(){cljs.core.async.impl.dispatch.running_QMARK_ = true;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
var count_13307 = 0;while(true){
var m_13308 = cljs.core.async.impl.dispatch.tasks.pop();if((m_13308 == null))
{} else
{m_13308.call(null);
if((count_13307 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__13309 = (count_13307 + 1);
count_13307 = G__13309;
continue;
}
} else
{}
}
break;
}
cljs.core.async.impl.dispatch.running_QMARK_ = false;
if((cljs.core.async.impl.dispatch.tasks.length > 0))
{return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else
{return null;
}
});
if(typeof MessageChannel !== 'undefined')
{cljs.core.async.impl.dispatch.message_channel = (new MessageChannel());
cljs.core.async.impl.dispatch.message_channel.port1.onmessage = (function (msg){return cljs.core.async.impl.dispatch.process_messages.call(null);
});
} else
{}
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){if(cljs.core.truth_((function (){var and__4879__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;if(and__4879__auto__)
{return cljs.core.async.impl.dispatch.running_QMARK_;
} else
{return and__4879__auto__;
}
})()))
{return null;
} else
{cljs.core.async.impl.dispatch.queued_QMARK_ = true;
if(typeof MessageChannel !== 'undefined')
{return cljs.core.async.impl.dispatch.message_channel.port2.postMessage(0);
} else
{if(typeof setImmediate !== 'undefined')
{return setImmediate(cljs.core.async.impl.dispatch.process_messages);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return setTimeout(cljs.core.async.impl.dispatch.process_messages,0);
} else
{return null;
}
}
}
}
});
cljs.core.async.impl.dispatch.run = (function run(f){cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){return setTimeout(f,delay);
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.channels')) {
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t13282 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t13282 = (function (val,box,meta13283){
this.val = val;
this.box = box;
this.meta13283 = meta13283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t13282.cljs$lang$type = true;
cljs.core.async.impl.channels.t13282.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t13282";
cljs.core.async.impl.channels.t13282.cljs$lang$ctorPrWriter = (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async.impl.channels/t13282");
});
cljs.core.async.impl.channels.t13282.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t13282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13284){var self__ = this;
var _13284__$1 = this;return self__.meta13283;
});
cljs.core.async.impl.channels.t13282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13284,meta13283__$1){var self__ = this;
var _13284__$1 = this;return (new cljs.core.async.impl.channels.t13282(self__.val,self__.box,meta13283__$1));
});
cljs.core.async.impl.channels.__GT_t13282 = (function __GT_t13282(val__$1,box__$1,meta13283){return (new cljs.core.async.impl.channels.t13282(val__$1,box__$1,meta13283));
});
}
return (new cljs.core.async.impl.channels.t13282(val,box,null));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})
cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__5461__auto__,writer__5462__auto__,opts__5463__auto__){return cljs.core._write.call(null,writer__5462__auto__,"cljs.core.async.impl.channels/PutBox");
});
cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){return (new cljs.core.async.impl.channels.PutBox(handler,val));
});
cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = 64;

/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
})
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.closed)
{return null;
} else
{self__.closed = true;
while(true){
var taker_13295 = self__.takes.pop();if((taker_13295 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_13295))
{var take_cb_13296 = cljs.core.async.impl.protocols.commit.call(null,taker_13295);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_13296,taker_13295,this$__$1){
return (function (){return take_cb_13296.call(null,null);
});})(take_cb_13296,taker_13295,this$__$1))
);
} else
{}
{
continue;
}
}
break;
}
return null;
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){var self__ = this;
var this$__$1 = this;if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))
{return null;
} else
{if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > 0)))
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);return cljs.core.async.impl.channels.box.call(null,cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf));
} else
{while(true){
var putter = self__.puts.pop();if(!((putter == null)))
{var put_handler = putter.handler;var val = putter.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler))
{var put_cb = cljs.core.async.impl.protocols.commit.call(null,put_handler);var _ = cljs.core.async.impl.protocols.commit.call(null,handler);cljs.core.async.impl.dispatch.run.call(null,put_cb);
return cljs.core.async.impl.channels.box.call(null,val);
} else
{{
continue;
}
}
} else
{if(self__.closed)
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);return cljs.core.async.impl.channels.box.call(null,null);
} else
{if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_takes = 0;
self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else
{self__.dirty_takes = (self__.dirty_takes + 1);
}
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"takes","takes",-1530407291,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.takes.unbounded_unshift(handler);
return null;
}
}
break;
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){var self__ = this;
var this$__$1 = this;if(!((val == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"val","val",-1640415014,null)))))].join('')));
}
var closed__$1 = self__.closed;if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))))
{return cljs.core.async.impl.channels.box.call(null,null);
} else
{while(true){
var taker = self__.takes.pop();if(!((taker == null)))
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))
{var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);var _ = cljs.core.async.impl.protocols.commit.call(null,handler);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,_,taker,closed__$1,this$__$1){
return (function (){return take_cb.call(null,val);
});})(take_cb,_,taker,closed__$1,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,null);
} else
{{
continue;
}
}
} else
{if(!(((self__.buf == null)) || (cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))))
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);cljs.core.async.impl.protocols.add_BANG_.call(null,self__.buf,val);
return cljs.core.async.impl.channels.box.call(null,null);
} else
{if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_puts = 0;
self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else
{self__.dirty_puts = (self__.dirty_puts + 1);
}
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"puts","puts",-1637078787,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
return null;
}
}
break;
}
}
});
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed){return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed));
});
cljs.core.async.impl.channels.chan = (function chan(buf){return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,buf,null));
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.timers')) {
goog.provide('cljs.core.async.impl.timers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.timers.MAX_LEVEL = 15;
cljs.core.async.impl.timers.P = (1 / 2);
cljs.core.async.impl.timers.random_level = (function() {
var random_level = null;
var random_level__0 = (function (){return random_level.call(null,0);
});
var random_level__1 = (function (level){while(true){
if(((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL)))
{{
var G__13342 = (level + 1);
level = G__13342;
continue;
}
} else
{return level;
}
break;
}
});
random_level = function(level){
switch(arguments.length){
case 0:
return random_level__0.call(this);
case 1:
return random_level__1.call(this,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_level.cljs$core$IFn$_invoke$arity$0 = random_level__0;
random_level.cljs$core$IFn$_invoke$arity$1 = random_level__1;
return random_level;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async.impl.timers/SkipListNode");
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.async.impl.timers.__GT_SkipListNode = (function __GT_SkipListNode(key,val,forward){return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});
cljs.core.async.impl.timers.skip_list_node = (function() {
var skip_list_node = null;
var skip_list_node__1 = (function (level){return skip_list_node.call(null,null,null,level);
});
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_13343 = 0;while(true){
if((i_13343 < arr.length))
{(arr[i_13343] = null);
{
var G__13344 = (i_13343 + 1);
i_13343 = G__13344;
continue;
}
} else
{}
break;
}
return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});
skip_list_node = function(k,v,level){
switch(arguments.length){
case 1:
return skip_list_node__1.call(this,k);
case 3:
return skip_list_node__3.call(this,k,v,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
skip_list_node.cljs$core$IFn$_invoke$arity$1 = skip_list_node__1;
skip_list_node.cljs$core$IFn$_invoke$arity$3 = skip_list_node__3;
return skip_list_node;
})()
;
cljs.core.async.impl.timers.least_greater_node = (function() {
var least_greater_node = null;
var least_greater_node__3 = (function (x,k,level){return least_greater_node.call(null,x,k,level,null);
});
var least_greater_node__4 = (function (x,k,level,update){while(true){
if(!((level < 0)))
{var x__$1 = (function (){var x__$1 = x;while(true){
var temp__4090__auto__ = (x__$1.forward[level]);if(cljs.core.truth_(temp__4090__auto__))
{var x_SINGLEQUOTE_ = temp__4090__auto__;if((x_SINGLEQUOTE_.key < k))
{{
var G__13345 = x_SINGLEQUOTE_;
x__$1 = G__13345;
continue;
}
} else
{return x__$1;
}
} else
{return x__$1;
}
break;
}
})();if((update == null))
{} else
{(update[level] = x__$1);
}
{
var G__13346 = x__$1;
var G__13347 = k;
var G__13348 = (level - 1);
var G__13349 = update;
x = G__13346;
k = G__13347;
level = G__13348;
update = G__13349;
continue;
}
} else
{return x;
}
break;
}
});
least_greater_node = function(x,k,level,update){
switch(arguments.length){
case 3:
return least_greater_node__3.call(this,x,k,level);
case 4:
return least_greater_node__4.call(this,x,k,level,update);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
least_greater_node.cljs$core$IFn$_invoke$arity$3 = least_greater_node__3;
least_greater_node.cljs$core$IFn$_invoke$arity$4 = least_greater_node__4;
return least_greater_node;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async.impl.timers/SkipList");
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;var pr_pair = ((function (coll__$1){
return (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var iter = ((function (coll__$1){
return (function iter(node){return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){if((node == null))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),iter.call(null,(node.forward[0])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter.call(null,(self__.header.forward[0]));
});
cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{return x__$1.val = v;
} else
{var new_level = cljs.core.async.impl.timers.random_level.call(null);if((new_level > self__.level))
{var i_13350 = (self__.level + 1);while(true){
if((i_13350 <= (new_level + 1)))
{(update[i_13350] = self__.header);
{
var G__13351 = (i_13350 + 1);
i_13350 = G__13351;
continue;
}
} else
{}
break;
}
self__.level = new_level;
} else
{}
var x__$2 = cljs.core.async.impl.timers.skip_list_node.call(null,k,v,(new Array(new_level)));var i = 0;while(true){
if((i <= self__.level))
{var links = (update[i]).forward;(x__$2.forward[i] = (links[i]));
return (links[i] = x__$2);
} else
{return null;
}
break;
}
}
});
cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{var i_13352 = 0;while(true){
if((i_13352 <= self__.level))
{var links_13353 = (update[i_13352]).forward;if(((links_13353[i_13352]) === x__$1))
{(links_13353[i_13352] = (x__$1.forward[i_13352]));
{
var G__13354 = (i_13352 + 1);
i_13352 = G__13354;
continue;
}
} else
{{
var G__13355 = (i_13352 + 1);
i_13352 = G__13355;
continue;
}
}
} else
{}
break;
}
while(true){
if(((self__.level > 0)) && (((self__.header.forward[self__.level]) == null)))
{self__.level = (self__.level - 1);
{
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if((x_SINGLEQUOTE_ == null))
{return null;
} else
{if((x_SINGLEQUOTE_.key >= k))
{return x_SINGLEQUOTE_;
} else
{{
var G__13356 = x_SINGLEQUOTE_;
x__$1 = G__13356;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__13357 = nx;
var G__13358 = (level__$1 - 1);
x = G__13357;
level__$1 = G__13358;
continue;
}
} else
{{
var G__13359 = x;
var G__13360 = (level__$1 - 1);
x = G__13359;
level__$1 = G__13360;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if(!((x_SINGLEQUOTE_ == null)))
{if((x_SINGLEQUOTE_.key > k))
{return x__$1;
} else
{{
var G__13361 = x_SINGLEQUOTE_;
x__$1 = G__13361;
continue;
}
}
} else
{if((level__$1 === 0))
{return x__$1;
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(nx))
{{
var G__13362 = nx;
var G__13363 = (level__$1 - 1);
x = G__13362;
level__$1 = G__13363;
continue;
}
} else
{{
var G__13364 = x;
var G__13365 = (level__$1 - 1);
x = G__13364;
level__$1 = G__13365;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.__GT_SkipList = (function __GT_SkipList(header,level){return (new cljs.core.async.impl.timers.SkipList(header,level));
});
cljs.core.async.impl.timers.skip_list = (function skip_list(){return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.call(null,0),0));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list.call(null);
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = 10;
/**
* returns a channel that will close after msecs
*/
cljs.core.async.impl.timers.timeout = (function timeout(msecs){var timeout__$1 = ((new Date()).valueOf() + msecs);var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout__$1);var or__4891__auto__ = (cljs.core.truth_((function (){var and__4879__auto__ = me;if(cljs.core.truth_(and__4879__auto__))
{return (me.key < (timeout__$1 + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else
{return and__4879__auto__;
}
})())?me.val:null);if(cljs.core.truth_(or__4891__auto__))
{return or__4891__auto__;
} else
{var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);cljs.core.async.impl.timers.timeouts_map.put(timeout__$1,timeout_channel);
cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__4891__auto__,timeout__$1,me){
return (function (){cljs.core.async.impl.timers.timeouts_map.remove(timeout__$1);
return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__4891__auto__,timeout__$1,me))
,msecs);
return timeout_channel;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.ioc-helpers')) {
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t13206 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t13206 = (function (f,fn_handler,meta13207){
this.f = f;
this.fn_handler = fn_handler;
this.meta13207 = meta13207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t13206.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t13206.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t13206";
cljs.core.async.impl.ioc_helpers.t13206.cljs$lang$ctorPrWriter = (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async.impl.ioc-helpers/t13206");
});
cljs.core.async.impl.ioc_helpers.t13206.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t13206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t13206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t13206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13208){var self__ = this;
var _13208__$1 = this;return self__.meta13207;
});
cljs.core.async.impl.ioc_helpers.t13206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13208,meta13207__$1){var self__ = this;
var _13208__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t13206(self__.f,self__.fn_handler,meta13207__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t13206 = (function __GT_t13206(f__$1,fn_handler__$1,meta13207){return (new cljs.core.async.impl.ioc_helpers.t13206(f__$1,fn_handler__$1,meta13207));
});
}
return (new cljs.core.async.impl.ioc_helpers.t13206(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e13210){if((e13210 instanceof Object))
{var ex = e13210;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13210;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_13213_13256 = state;(statearr_13213_13256[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_13213_13256[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_13214_13257 = state;(statearr_13214_13257[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_13214_13257[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_13217_13258 = state;(statearr_13217_13258[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_13217_13258[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_13218_13259 = state;(statearr_13218_13259[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_13218_13259[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13219){var map__13224 = p__13219;var map__13224__$1 = ((cljs.core.seq_QMARK_.call(null,map__13224))?cljs.core.apply.call(null,cljs.core.hash_map,map__13224):map__13224);var opts = map__13224__$1;var statearr_13225_13260 = state;(statearr_13225_13260[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__13224,map__13224__$1,opts){
return (function (val){var statearr_13226_13261 = state;(statearr_13226_13261[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13224,map__13224__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_13227_13262 = state;(statearr_13227_13262[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13219 = null;if (arguments.length > 3) {
  p__13219 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13219);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13263){
var state = cljs.core.first(arglist__13263);
arglist__13263 = cljs.core.next(arglist__13263);
var cont_block = cljs.core.first(arglist__13263);
arglist__13263 = cljs.core.next(arglist__13263);
var ports = cljs.core.first(arglist__13263);
var p__13219 = cljs.core.rest(arglist__13263);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13219);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){return null;
});})(c))
));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5472__auto__){var self__ = this;
var this__5472__auto____$1 = this;var h__5302__auto__ = self__.__hash;if(!((h__5302__auto__ == null)))
{return h__5302__auto__;
} else
{var h__5302__auto____$1 = cljs.core.hash_imap.call(null,this__5472__auto____$1);self__.__hash = h__5302__auto____$1;
return h__5302__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5477__auto__,k__5478__auto__){var self__ = this;
var this__5477__auto____$1 = this;return cljs.core._lookup.call(null,this__5477__auto____$1,k__5478__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5479__auto__,k13229,else__5480__auto__){var self__ = this;
var this__5479__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k13229,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k13229,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k13229,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k13229,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k13229,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k13229,else__5480__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5484__auto__,k__5485__auto__,G__13228){var self__ = this;
var this__5484__auto____$1 = this;var pred__13231 = cljs.core.keyword_identical_QMARK_;var expr__13232 = k__5485__auto__;if(cljs.core.truth_(pred__13231.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__13232)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__13228,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13231.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__13232)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__13228,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13231.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__13232)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__13228,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13231.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__13232)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__13228,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13231.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__13232)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__13228,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5485__auto__,G__13228),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5491__auto__,writer__5492__auto__,opts__5493__auto__){var self__ = this;
var this__5491__auto____$1 = this;var pr_pair__5494__auto__ = ((function (this__5491__auto____$1){
return (function (keyval__5495__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5492__auto__,cljs.core.pr_writer,""," ","",opts__5493__auto__,keyval__5495__auto__);
});})(this__5491__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5492__auto__,pr_pair__5494__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__5493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5482__auto__,entry__5483__auto__){var self__ = this;
var this__5482__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5483__auto__))
{return cljs.core._assoc.call(null,this__5482__auto____$1,cljs.core._nth.call(null,entry__5483__auto__,0),cljs.core._nth.call(null,entry__5483__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5482__auto____$1,entry__5483__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5489__auto__){var self__ = this;
var this__5489__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5481__auto__){var self__ = this;
var this__5481__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5473__auto__,other__5474__auto__){var self__ = this;
var this__5473__auto____$1 = this;if(cljs.core.truth_((function (){var and__4879__auto__ = other__5474__auto__;if(cljs.core.truth_(and__4879__auto__))
{return ((this__5473__auto____$1.constructor === other__5474__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5473__auto____$1,other__5474__auto__));
} else
{return and__4879__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5476__auto__,G__13228){var self__ = this;
var this__5476__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__13228,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5471__auto__){var self__ = this;
var this__5471__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5475__auto__){var self__ = this;
var this__5475__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5486__auto__,k__5487__auto__){var self__ = this;
var this__5486__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], null), null),k__5487__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5486__auto____$1),self__.__meta),k__5487__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5487__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__5511__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__5511__auto__,writer__5512__auto__){return cljs.core._write.call(null,writer__5512__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__13230){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__13230),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__13230),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__13230),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__13230),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__13230),null,cljs.core.dissoc.call(null,G__13230,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_13235 = state;(statearr_13235[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_13235;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__4879__auto__ = exception;if(cljs.core.truth_(and__4879__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__4879__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__4879__auto__ = exception;if(cljs.core.truth_(and__4879__auto__))
{var and__4879__auto____$1 = catch_block;if(cljs.core.truth_(and__4879__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__4879__auto____$1;
}
} else
{return and__4879__auto__;
}
})()))
{var statearr_13241 = state;(statearr_13241[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_13241[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_13241[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_13241[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_13241;
} else
{if(cljs.core.truth_((function (){var and__4879__auto__ = exception;if(cljs.core.truth_(and__4879__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__4879__auto__;
}
})()))
{var statearr_13242_13264 = state;(statearr_13242_13264[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__13265 = state;
state = G__13265;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__4879__auto__ = exception;if(cljs.core.truth_(and__4879__auto__))
{var and__4879__auto____$1 = cljs.core.not.call(null,catch_block);if(and__4879__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4879__auto____$1;
}
} else
{return and__4879__auto__;
}
})()))
{var statearr_13243 = state;(statearr_13243[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_13243[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_13243;
} else
{if(cljs.core.truth_((function (){var and__4879__auto__ = cljs.core.not.call(null,exception);if(and__4879__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4879__auto__;
}
})()))
{var statearr_13244 = state;(statearr_13244[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_13244[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_13244;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_13245 = state;(statearr_13245[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_13245[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_13245;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,false))].join('')));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async')) {
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10642 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10642 = (function (f,fn_handler,meta10643){
this.f = f;
this.fn_handler = fn_handler;
this.meta10643 = meta10643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10642.cljs$lang$type = true;
cljs.core.async.t10642.cljs$lang$ctorStr = "cljs.core.async/t10642";
cljs.core.async.t10642.cljs$lang$ctorPrWriter = (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async/t10642");
});
cljs.core.async.t10642.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10644){var self__ = this;
var _10644__$1 = this;return self__.meta10643;
});
cljs.core.async.t10642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10644,meta10643__$1){var self__ = this;
var _10644__$1 = this;return (new cljs.core.async.t10642(self__.f,self__.fn_handler,meta10643__$1));
});
cljs.core.async.__GT_t10642 = (function __GT_t10642(f__$1,fn_handler__$1,meta10643){return (new cljs.core.async.t10642(f__$1,fn_handler__$1,meta10643));
});
}
return (new cljs.core.async.t10642(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10646 = buff;if(G__10646)
{var bit__5541__auto__ = null;if(cljs.core.truth_((function (){var or__4891__auto__ = bit__5541__auto__;if(cljs.core.truth_(or__4891__auto__))
{return or__4891__auto__;
} else
{return G__10646.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10646.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10646);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10646);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12910 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12910);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12910,ret){
return (function (){return fn1.call(null,val_12910);
});})(val_12910,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__4879__auto__ = ret;if(cljs.core.truth_(and__4879__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__4879__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5739__auto___12911 = n;var x_12912 = 0;while(true){
if((x_12912 < n__5739__auto___12911))
{(a[x_12912] = 0);
{
var G__12913 = (x_12912 + 1);
x_12912 = G__12913;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12914 = (i + 1);
i = G__12914;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10650 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10650 = (function (flag,alt_flag,meta10651){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10651 = meta10651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10650.cljs$lang$type = true;
cljs.core.async.t10650.cljs$lang$ctorStr = "cljs.core.async/t10650";
cljs.core.async.t10650.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async/t10650");
});})(flag))
;
cljs.core.async.t10650.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10652){var self__ = this;
var _10652__$1 = this;return self__.meta10651;
});})(flag))
;
cljs.core.async.t10650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10652,meta10651__$1){var self__ = this;
var _10652__$1 = this;return (new cljs.core.async.t10650(self__.flag,self__.alt_flag,meta10651__$1));
});})(flag))
;
cljs.core.async.__GT_t10650 = ((function (flag){
return (function __GT_t10650(flag__$1,alt_flag__$1,meta10651){return (new cljs.core.async.t10650(flag__$1,alt_flag__$1,meta10651));
});})(flag))
;
}
return (new cljs.core.async.t10650(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10656 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10656 = (function (cb,flag,alt_handler,meta10657){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10657 = meta10657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10656.cljs$lang$type = true;
cljs.core.async.t10656.cljs$lang$ctorStr = "cljs.core.async/t10656";
cljs.core.async.t10656.cljs$lang$ctorPrWriter = (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async/t10656");
});
cljs.core.async.t10656.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10658){var self__ = this;
var _10658__$1 = this;return self__.meta10657;
});
cljs.core.async.t10656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10658,meta10657__$1){var self__ = this;
var _10658__$1 = this;return (new cljs.core.async.t10656(self__.cb,self__.flag,self__.alt_handler,meta10657__$1));
});
cljs.core.async.__GT_t10656 = (function __GT_t10656(cb__$1,flag__$1,alt_handler__$1,meta10657){return (new cljs.core.async.t10656(cb__$1,flag__$1,alt_handler__$1,meta10657));
});
}
return (new cljs.core.async.t10656(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10659_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10659_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4891__auto__ = wport;if(cljs.core.truth_(or__4891__auto__))
{return or__4891__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12915 = (i + 1);
i = G__12915;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__4891__auto__ = ret;if(cljs.core.truth_(or__4891__auto__))
{return or__4891__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__4879__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__4879__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__4879__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10660){var map__10662 = p__10660;var map__10662__$1 = ((cljs.core.seq_QMARK_.call(null,map__10662))?cljs.core.apply.call(null,cljs.core.hash_map,map__10662):map__10662);var opts = map__10662__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10660 = null;if (arguments.length > 1) {
  p__10660 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10660);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12916){
var ports = cljs.core.first(arglist__12916);
var p__10660 = cljs.core.rest(arglist__12916);
return alts_BANG___delegate(ports,p__10660);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10670 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10670 = (function (ch,f,map_LT_,meta10671){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10671 = meta10671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10670.cljs$lang$type = true;
cljs.core.async.t10670.cljs$lang$ctorStr = "cljs.core.async/t10670";
cljs.core.async.t10670.cljs$lang$ctorPrWriter = (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async/t10670");
});
cljs.core.async.t10670.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10670.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10670.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10670.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10673 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10673 = (function (fn1,_,meta10671,ch,f,map_LT_,meta10674){
this.fn1 = fn1;
this._ = _;
this.meta10671 = meta10671;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10674 = meta10674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10673.cljs$lang$type = true;
cljs.core.async.t10673.cljs$lang$ctorStr = "cljs.core.async/t10673";
cljs.core.async.t10673.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async/t10673");
});})(___$1))
;
cljs.core.async.t10673.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10673.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10663_SHARP_){return f1.call(null,(((p1__10663_SHARP_ == null))?null:self__.f.call(null,p1__10663_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10675){var self__ = this;
var _10675__$1 = this;return self__.meta10674;
});})(___$1))
;
cljs.core.async.t10673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10675,meta10674__$1){var self__ = this;
var _10675__$1 = this;return (new cljs.core.async.t10673(self__.fn1,self__._,self__.meta10671,self__.ch,self__.f,self__.map_LT_,meta10674__$1));
});})(___$1))
;
cljs.core.async.__GT_t10673 = ((function (___$1){
return (function __GT_t10673(fn1__$1,___$2,meta10671__$1,ch__$2,f__$2,map_LT___$2,meta10674){return (new cljs.core.async.t10673(fn1__$1,___$2,meta10671__$1,ch__$2,f__$2,map_LT___$2,meta10674));
});})(___$1))
;
}
return (new cljs.core.async.t10673(fn1,___$1,self__.meta10671,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__4879__auto__ = ret;if(cljs.core.truth_(and__4879__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__4879__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10670.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10670.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10672){var self__ = this;
var _10672__$1 = this;return self__.meta10671;
});
cljs.core.async.t10670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10672,meta10671__$1){var self__ = this;
var _10672__$1 = this;return (new cljs.core.async.t10670(self__.ch,self__.f,self__.map_LT_,meta10671__$1));
});
cljs.core.async.__GT_t10670 = (function __GT_t10670(ch__$1,f__$1,map_LT___$1,meta10671){return (new cljs.core.async.t10670(ch__$1,f__$1,map_LT___$1,meta10671));
});
}
return (new cljs.core.async.t10670(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10679 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10679 = (function (ch,f,map_GT_,meta10680){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10680 = meta10680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10679.cljs$lang$type = true;
cljs.core.async.t10679.cljs$lang$ctorStr = "cljs.core.async/t10679";
cljs.core.async.t10679.cljs$lang$ctorPrWriter = (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async/t10679");
});
cljs.core.async.t10679.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10679.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10679.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10679.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10679.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10679.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10681){var self__ = this;
var _10681__$1 = this;return self__.meta10680;
});
cljs.core.async.t10679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10681,meta10680__$1){var self__ = this;
var _10681__$1 = this;return (new cljs.core.async.t10679(self__.ch,self__.f,self__.map_GT_,meta10680__$1));
});
cljs.core.async.__GT_t10679 = (function __GT_t10679(ch__$1,f__$1,map_GT___$1,meta10680){return (new cljs.core.async.t10679(ch__$1,f__$1,map_GT___$1,meta10680));
});
}
return (new cljs.core.async.t10679(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10685 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10685 = (function (ch,p,filter_GT_,meta10686){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10686 = meta10686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10685.cljs$lang$type = true;
cljs.core.async.t10685.cljs$lang$ctorStr = "cljs.core.async/t10685";
cljs.core.async.t10685.cljs$lang$ctorPrWriter = (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async/t10685");
});
cljs.core.async.t10685.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10685.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10685.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10685.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10685.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10685.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10687){var self__ = this;
var _10687__$1 = this;return self__.meta10686;
});
cljs.core.async.t10685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10687,meta10686__$1){var self__ = this;
var _10687__$1 = this;return (new cljs.core.async.t10685(self__.ch,self__.p,self__.filter_GT_,meta10686__$1));
});
cljs.core.async.__GT_t10685 = (function __GT_t10685(ch__$1,p__$1,filter_GT___$1,meta10686){return (new cljs.core.async.t10685(ch__$1,p__$1,filter_GT___$1,meta10686));
});
}
return (new cljs.core.async.t10685(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7538__auto___12917 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto___12917,out){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto___12917,out){
return (function (state_10749){var state_val_10750 = (state_10749[1]);if((state_val_10750 === 1))
{var state_10749__$1 = state_10749;var statearr_10751_12918 = state_10749__$1;(statearr_10751_12918[2] = null);
(statearr_10751_12918[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10750 === 2))
{var state_10749__$1 = state_10749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10749__$1,4,ch);
} else
{if((state_val_10750 === 3))
{var inst_10747 = (state_10749[2]);var state_10749__$1 = state_10749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10749__$1,inst_10747);
} else
{if((state_val_10750 === 4))
{var inst_10731 = (state_10749[7]);var inst_10731__$1 = (state_10749[2]);var inst_10732 = (inst_10731__$1 == null);var state_10749__$1 = (function (){var statearr_10752 = state_10749;(statearr_10752[7] = inst_10731__$1);
return statearr_10752;
})();if(cljs.core.truth_(inst_10732))
{var statearr_10753_12919 = state_10749__$1;(statearr_10753_12919[1] = 5);
} else
{var statearr_10754_12920 = state_10749__$1;(statearr_10754_12920[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10750 === 5))
{var inst_10734 = cljs.core.async.close_BANG_.call(null,out);var state_10749__$1 = state_10749;var statearr_10755_12921 = state_10749__$1;(statearr_10755_12921[2] = inst_10734);
(statearr_10755_12921[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10750 === 6))
{var inst_10731 = (state_10749[7]);var inst_10736 = p.call(null,inst_10731);var state_10749__$1 = state_10749;if(cljs.core.truth_(inst_10736))
{var statearr_10756_12922 = state_10749__$1;(statearr_10756_12922[1] = 8);
} else
{var statearr_10757_12923 = state_10749__$1;(statearr_10757_12923[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10750 === 7))
{var inst_10745 = (state_10749[2]);var state_10749__$1 = state_10749;var statearr_10758_12924 = state_10749__$1;(statearr_10758_12924[2] = inst_10745);
(statearr_10758_12924[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10750 === 8))
{var inst_10731 = (state_10749[7]);var state_10749__$1 = state_10749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10749__$1,11,out,inst_10731);
} else
{if((state_val_10750 === 9))
{var state_10749__$1 = state_10749;var statearr_10759_12925 = state_10749__$1;(statearr_10759_12925[2] = null);
(statearr_10759_12925[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10750 === 10))
{var inst_10742 = (state_10749[2]);var state_10749__$1 = (function (){var statearr_10760 = state_10749;(statearr_10760[8] = inst_10742);
return statearr_10760;
})();var statearr_10761_12926 = state_10749__$1;(statearr_10761_12926[2] = null);
(statearr_10761_12926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10750 === 11))
{var inst_10739 = (state_10749[2]);var state_10749__$1 = state_10749;var statearr_10762_12927 = state_10749__$1;(statearr_10762_12927[2] = inst_10739);
(statearr_10762_12927[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto___12917,out))
;return ((function (switch__7468__auto__,c__7538__auto___12917,out){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_10766 = [null,null,null,null,null,null,null,null,null];(statearr_10766[0] = state_machine__7469__auto__);
(statearr_10766[1] = 1);
return statearr_10766;
});
var state_machine__7469__auto____1 = (function (state_10749){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_10749);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e10767){if((e10767 instanceof Object))
{var ex__7472__auto__ = e10767;var statearr_10768_12928 = state_10749;(statearr_10768_12928[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10749);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10767;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12929 = state_10749;
state_10749 = G__12929;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_10749){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_10749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto___12917,out))
})();var state__7540__auto__ = (function (){var statearr_10769 = f__7539__auto__.call(null);(statearr_10769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto___12917);
return statearr_10769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto___12917,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7538__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto__){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto__){
return (function (state_10921){var state_val_10922 = (state_10921[1]);if((state_val_10922 === 1))
{var state_10921__$1 = state_10921;var statearr_10923_12930 = state_10921__$1;(statearr_10923_12930[2] = null);
(statearr_10923_12930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 2))
{var state_10921__$1 = state_10921;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10921__$1,4,in$);
} else
{if((state_val_10922 === 3))
{var inst_10919 = (state_10921[2]);var state_10921__$1 = state_10921;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10921__$1,inst_10919);
} else
{if((state_val_10922 === 4))
{var inst_10867 = (state_10921[7]);var inst_10867__$1 = (state_10921[2]);var inst_10868 = (inst_10867__$1 == null);var state_10921__$1 = (function (){var statearr_10924 = state_10921;(statearr_10924[7] = inst_10867__$1);
return statearr_10924;
})();if(cljs.core.truth_(inst_10868))
{var statearr_10925_12931 = state_10921__$1;(statearr_10925_12931[1] = 5);
} else
{var statearr_10926_12932 = state_10921__$1;(statearr_10926_12932[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 5))
{var inst_10870 = cljs.core.async.close_BANG_.call(null,out);var state_10921__$1 = state_10921;var statearr_10927_12933 = state_10921__$1;(statearr_10927_12933[2] = inst_10870);
(statearr_10927_12933[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 6))
{var inst_10867 = (state_10921[7]);var inst_10872 = f.call(null,inst_10867);var inst_10877 = cljs.core.seq.call(null,inst_10872);var inst_10878 = inst_10877;var inst_10879 = null;var inst_10880 = 0;var inst_10881 = 0;var state_10921__$1 = (function (){var statearr_10928 = state_10921;(statearr_10928[8] = inst_10881);
(statearr_10928[9] = inst_10880);
(statearr_10928[10] = inst_10878);
(statearr_10928[11] = inst_10879);
return statearr_10928;
})();var statearr_10929_12934 = state_10921__$1;(statearr_10929_12934[2] = null);
(statearr_10929_12934[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 7))
{var inst_10917 = (state_10921[2]);var state_10921__$1 = state_10921;var statearr_10930_12935 = state_10921__$1;(statearr_10930_12935[2] = inst_10917);
(statearr_10930_12935[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 8))
{var inst_10881 = (state_10921[8]);var inst_10880 = (state_10921[9]);var inst_10883 = (inst_10881 < inst_10880);var inst_10884 = inst_10883;var state_10921__$1 = state_10921;if(cljs.core.truth_(inst_10884))
{var statearr_10931_12936 = state_10921__$1;(statearr_10931_12936[1] = 10);
} else
{var statearr_10932_12937 = state_10921__$1;(statearr_10932_12937[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 9))
{var inst_10914 = (state_10921[2]);var state_10921__$1 = (function (){var statearr_10933 = state_10921;(statearr_10933[12] = inst_10914);
return statearr_10933;
})();var statearr_10934_12938 = state_10921__$1;(statearr_10934_12938[2] = null);
(statearr_10934_12938[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 10))
{var inst_10881 = (state_10921[8]);var inst_10879 = (state_10921[11]);var inst_10886 = cljs.core._nth.call(null,inst_10879,inst_10881);var state_10921__$1 = state_10921;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10921__$1,13,out,inst_10886);
} else
{if((state_val_10922 === 11))
{var inst_10892 = (state_10921[13]);var inst_10878 = (state_10921[10]);var inst_10892__$1 = cljs.core.seq.call(null,inst_10878);var state_10921__$1 = (function (){var statearr_10938 = state_10921;(statearr_10938[13] = inst_10892__$1);
return statearr_10938;
})();if(inst_10892__$1)
{var statearr_10939_12939 = state_10921__$1;(statearr_10939_12939[1] = 14);
} else
{var statearr_10940_12940 = state_10921__$1;(statearr_10940_12940[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 12))
{var inst_10912 = (state_10921[2]);var state_10921__$1 = state_10921;var statearr_10941_12941 = state_10921__$1;(statearr_10941_12941[2] = inst_10912);
(statearr_10941_12941[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 13))
{var inst_10881 = (state_10921[8]);var inst_10880 = (state_10921[9]);var inst_10878 = (state_10921[10]);var inst_10879 = (state_10921[11]);var inst_10888 = (state_10921[2]);var inst_10889 = (inst_10881 + 1);var tmp10935 = inst_10880;var tmp10936 = inst_10878;var tmp10937 = inst_10879;var inst_10878__$1 = tmp10936;var inst_10879__$1 = tmp10937;var inst_10880__$1 = tmp10935;var inst_10881__$1 = inst_10889;var state_10921__$1 = (function (){var statearr_10942 = state_10921;(statearr_10942[8] = inst_10881__$1);
(statearr_10942[9] = inst_10880__$1);
(statearr_10942[10] = inst_10878__$1);
(statearr_10942[11] = inst_10879__$1);
(statearr_10942[14] = inst_10888);
return statearr_10942;
})();var statearr_10943_12942 = state_10921__$1;(statearr_10943_12942[2] = null);
(statearr_10943_12942[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 14))
{var inst_10892 = (state_10921[13]);var inst_10894 = cljs.core.chunked_seq_QMARK_.call(null,inst_10892);var state_10921__$1 = state_10921;if(inst_10894)
{var statearr_10944_12943 = state_10921__$1;(statearr_10944_12943[1] = 17);
} else
{var statearr_10945_12944 = state_10921__$1;(statearr_10945_12944[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 15))
{var state_10921__$1 = state_10921;var statearr_10946_12945 = state_10921__$1;(statearr_10946_12945[2] = null);
(statearr_10946_12945[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 16))
{var inst_10910 = (state_10921[2]);var state_10921__$1 = state_10921;var statearr_10947_12946 = state_10921__$1;(statearr_10947_12946[2] = inst_10910);
(statearr_10947_12946[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 17))
{var inst_10892 = (state_10921[13]);var inst_10896 = cljs.core.chunk_first.call(null,inst_10892);var inst_10897 = cljs.core.chunk_rest.call(null,inst_10892);var inst_10898 = cljs.core.count.call(null,inst_10896);var inst_10878 = inst_10897;var inst_10879 = inst_10896;var inst_10880 = inst_10898;var inst_10881 = 0;var state_10921__$1 = (function (){var statearr_10948 = state_10921;(statearr_10948[8] = inst_10881);
(statearr_10948[9] = inst_10880);
(statearr_10948[10] = inst_10878);
(statearr_10948[11] = inst_10879);
return statearr_10948;
})();var statearr_10949_12947 = state_10921__$1;(statearr_10949_12947[2] = null);
(statearr_10949_12947[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 18))
{var inst_10892 = (state_10921[13]);var inst_10901 = cljs.core.first.call(null,inst_10892);var state_10921__$1 = state_10921;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10921__$1,20,out,inst_10901);
} else
{if((state_val_10922 === 19))
{var inst_10907 = (state_10921[2]);var state_10921__$1 = state_10921;var statearr_10950_12948 = state_10921__$1;(statearr_10950_12948[2] = inst_10907);
(statearr_10950_12948[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10922 === 20))
{var inst_10892 = (state_10921[13]);var inst_10903 = (state_10921[2]);var inst_10904 = cljs.core.next.call(null,inst_10892);var inst_10878 = inst_10904;var inst_10879 = null;var inst_10880 = 0;var inst_10881 = 0;var state_10921__$1 = (function (){var statearr_10951 = state_10921;(statearr_10951[8] = inst_10881);
(statearr_10951[15] = inst_10903);
(statearr_10951[9] = inst_10880);
(statearr_10951[10] = inst_10878);
(statearr_10951[11] = inst_10879);
return statearr_10951;
})();var statearr_10952_12949 = state_10921__$1;(statearr_10952_12949[2] = null);
(statearr_10952_12949[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto__))
;return ((function (switch__7468__auto__,c__7538__auto__){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_10956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10956[0] = state_machine__7469__auto__);
(statearr_10956[1] = 1);
return statearr_10956;
});
var state_machine__7469__auto____1 = (function (state_10921){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_10921);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e10957){if((e10957 instanceof Object))
{var ex__7472__auto__ = e10957;var statearr_10958_12950 = state_10921;(statearr_10958_12950[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10921);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10957;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12951 = state_10921;
state_10921 = G__12951;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_10921){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_10921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto__))
})();var state__7540__auto__ = (function (){var statearr_10959 = f__7539__auto__.call(null);(statearr_10959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto__);
return statearr_10959;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto__))
);
return c__7538__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7538__auto___12952 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto___12952){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto___12952){
return (function (state_11019){var state_val_11020 = (state_11019[1]);if((state_val_11020 === 1))
{var state_11019__$1 = state_11019;var statearr_11021_12953 = state_11019__$1;(statearr_11021_12953[2] = null);
(statearr_11021_12953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11020 === 2))
{var state_11019__$1 = state_11019;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11019__$1,4,from);
} else
{if((state_val_11020 === 3))
{var inst_11017 = (state_11019[2]);var state_11019__$1 = state_11019;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11019__$1,inst_11017);
} else
{if((state_val_11020 === 4))
{var inst_11002 = (state_11019[7]);var inst_11002__$1 = (state_11019[2]);var inst_11003 = (inst_11002__$1 == null);var state_11019__$1 = (function (){var statearr_11022 = state_11019;(statearr_11022[7] = inst_11002__$1);
return statearr_11022;
})();if(cljs.core.truth_(inst_11003))
{var statearr_11023_12954 = state_11019__$1;(statearr_11023_12954[1] = 5);
} else
{var statearr_11024_12955 = state_11019__$1;(statearr_11024_12955[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11020 === 5))
{var state_11019__$1 = state_11019;if(cljs.core.truth_(close_QMARK_))
{var statearr_11025_12956 = state_11019__$1;(statearr_11025_12956[1] = 8);
} else
{var statearr_11026_12957 = state_11019__$1;(statearr_11026_12957[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11020 === 6))
{var inst_11002 = (state_11019[7]);var state_11019__$1 = state_11019;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11019__$1,11,to,inst_11002);
} else
{if((state_val_11020 === 7))
{var inst_11015 = (state_11019[2]);var state_11019__$1 = state_11019;var statearr_11027_12958 = state_11019__$1;(statearr_11027_12958[2] = inst_11015);
(statearr_11027_12958[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11020 === 8))
{var inst_11006 = cljs.core.async.close_BANG_.call(null,to);var state_11019__$1 = state_11019;var statearr_11028_12959 = state_11019__$1;(statearr_11028_12959[2] = inst_11006);
(statearr_11028_12959[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11020 === 9))
{var state_11019__$1 = state_11019;var statearr_11029_12960 = state_11019__$1;(statearr_11029_12960[2] = null);
(statearr_11029_12960[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11020 === 10))
{var inst_11009 = (state_11019[2]);var state_11019__$1 = state_11019;var statearr_11030_12961 = state_11019__$1;(statearr_11030_12961[2] = inst_11009);
(statearr_11030_12961[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11020 === 11))
{var inst_11012 = (state_11019[2]);var state_11019__$1 = (function (){var statearr_11031 = state_11019;(statearr_11031[8] = inst_11012);
return statearr_11031;
})();var statearr_11032_12962 = state_11019__$1;(statearr_11032_12962[2] = null);
(statearr_11032_12962[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto___12952))
;return ((function (switch__7468__auto__,c__7538__auto___12952){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_11036 = [null,null,null,null,null,null,null,null,null];(statearr_11036[0] = state_machine__7469__auto__);
(statearr_11036[1] = 1);
return statearr_11036;
});
var state_machine__7469__auto____1 = (function (state_11019){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_11019);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e11037){if((e11037 instanceof Object))
{var ex__7472__auto__ = e11037;var statearr_11038_12963 = state_11019;(statearr_11038_12963[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11019);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11037;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12964 = state_11019;
state_11019 = G__12964;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_11019){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_11019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto___12952))
})();var state__7540__auto__ = (function (){var statearr_11039 = f__7539__auto__.call(null);(statearr_11039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto___12952);
return statearr_11039;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto___12952))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7538__auto___12965 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto___12965,tc,fc){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto___12965,tc,fc){
return (function (state_11104){var state_val_11105 = (state_11104[1]);if((state_val_11105 === 1))
{var state_11104__$1 = state_11104;var statearr_11106_12966 = state_11104__$1;(statearr_11106_12966[2] = null);
(statearr_11106_12966[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11105 === 2))
{var state_11104__$1 = state_11104;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11104__$1,4,ch);
} else
{if((state_val_11105 === 3))
{var inst_11102 = (state_11104[2]);var state_11104__$1 = state_11104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11104__$1,inst_11102);
} else
{if((state_val_11105 === 4))
{var inst_11085 = (state_11104[7]);var inst_11085__$1 = (state_11104[2]);var inst_11086 = (inst_11085__$1 == null);var state_11104__$1 = (function (){var statearr_11107 = state_11104;(statearr_11107[7] = inst_11085__$1);
return statearr_11107;
})();if(cljs.core.truth_(inst_11086))
{var statearr_11108_12967 = state_11104__$1;(statearr_11108_12967[1] = 5);
} else
{var statearr_11109_12968 = state_11104__$1;(statearr_11109_12968[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11105 === 5))
{var inst_11088 = cljs.core.async.close_BANG_.call(null,tc);var inst_11089 = cljs.core.async.close_BANG_.call(null,fc);var state_11104__$1 = (function (){var statearr_11110 = state_11104;(statearr_11110[8] = inst_11088);
return statearr_11110;
})();var statearr_11111_12969 = state_11104__$1;(statearr_11111_12969[2] = inst_11089);
(statearr_11111_12969[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11105 === 6))
{var inst_11085 = (state_11104[7]);var inst_11091 = p.call(null,inst_11085);var state_11104__$1 = state_11104;if(cljs.core.truth_(inst_11091))
{var statearr_11112_12970 = state_11104__$1;(statearr_11112_12970[1] = 9);
} else
{var statearr_11113_12971 = state_11104__$1;(statearr_11113_12971[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11105 === 7))
{var inst_11100 = (state_11104[2]);var state_11104__$1 = state_11104;var statearr_11114_12972 = state_11104__$1;(statearr_11114_12972[2] = inst_11100);
(statearr_11114_12972[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11105 === 8))
{var inst_11097 = (state_11104[2]);var state_11104__$1 = (function (){var statearr_11115 = state_11104;(statearr_11115[9] = inst_11097);
return statearr_11115;
})();var statearr_11116_12973 = state_11104__$1;(statearr_11116_12973[2] = null);
(statearr_11116_12973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11105 === 9))
{var state_11104__$1 = state_11104;var statearr_11117_12974 = state_11104__$1;(statearr_11117_12974[2] = tc);
(statearr_11117_12974[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11105 === 10))
{var state_11104__$1 = state_11104;var statearr_11118_12975 = state_11104__$1;(statearr_11118_12975[2] = fc);
(statearr_11118_12975[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11105 === 11))
{var inst_11085 = (state_11104[7]);var inst_11095 = (state_11104[2]);var state_11104__$1 = state_11104;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11104__$1,8,inst_11095,inst_11085);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto___12965,tc,fc))
;return ((function (switch__7468__auto__,c__7538__auto___12965,tc,fc){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_11122 = [null,null,null,null,null,null,null,null,null,null];(statearr_11122[0] = state_machine__7469__auto__);
(statearr_11122[1] = 1);
return statearr_11122;
});
var state_machine__7469__auto____1 = (function (state_11104){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_11104);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e11123){if((e11123 instanceof Object))
{var ex__7472__auto__ = e11123;var statearr_11124_12976 = state_11104;(statearr_11124_12976[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11104);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12977 = state_11104;
state_11104 = G__12977;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_11104){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_11104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto___12965,tc,fc))
})();var state__7540__auto__ = (function (){var statearr_11125 = f__7539__auto__.call(null);(statearr_11125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto___12965);
return statearr_11125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto___12965,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7538__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto__){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto__){
return (function (state_11172){var state_val_11173 = (state_11172[1]);if((state_val_11173 === 7))
{var inst_11168 = (state_11172[2]);var state_11172__$1 = state_11172;var statearr_11174_12978 = state_11172__$1;(statearr_11174_12978[2] = inst_11168);
(statearr_11174_12978[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11173 === 6))
{var inst_11158 = (state_11172[7]);var inst_11161 = (state_11172[8]);var inst_11165 = f.call(null,inst_11158,inst_11161);var inst_11158__$1 = inst_11165;var state_11172__$1 = (function (){var statearr_11175 = state_11172;(statearr_11175[7] = inst_11158__$1);
return statearr_11175;
})();var statearr_11176_12979 = state_11172__$1;(statearr_11176_12979[2] = null);
(statearr_11176_12979[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11173 === 5))
{var inst_11158 = (state_11172[7]);var state_11172__$1 = state_11172;var statearr_11177_12980 = state_11172__$1;(statearr_11177_12980[2] = inst_11158);
(statearr_11177_12980[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11173 === 4))
{var inst_11161 = (state_11172[8]);var inst_11161__$1 = (state_11172[2]);var inst_11162 = (inst_11161__$1 == null);var state_11172__$1 = (function (){var statearr_11178 = state_11172;(statearr_11178[8] = inst_11161__$1);
return statearr_11178;
})();if(cljs.core.truth_(inst_11162))
{var statearr_11179_12981 = state_11172__$1;(statearr_11179_12981[1] = 5);
} else
{var statearr_11180_12982 = state_11172__$1;(statearr_11180_12982[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11173 === 3))
{var inst_11170 = (state_11172[2]);var state_11172__$1 = state_11172;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11172__$1,inst_11170);
} else
{if((state_val_11173 === 2))
{var state_11172__$1 = state_11172;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11172__$1,4,ch);
} else
{if((state_val_11173 === 1))
{var inst_11158 = init;var state_11172__$1 = (function (){var statearr_11181 = state_11172;(statearr_11181[7] = inst_11158);
return statearr_11181;
})();var statearr_11182_12983 = state_11172__$1;(statearr_11182_12983[2] = null);
(statearr_11182_12983[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__7538__auto__))
;return ((function (switch__7468__auto__,c__7538__auto__){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_11186 = [null,null,null,null,null,null,null,null,null];(statearr_11186[0] = state_machine__7469__auto__);
(statearr_11186[1] = 1);
return statearr_11186;
});
var state_machine__7469__auto____1 = (function (state_11172){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_11172);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e11187){if((e11187 instanceof Object))
{var ex__7472__auto__ = e11187;var statearr_11188_12984 = state_11172;(statearr_11188_12984[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11172);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12985 = state_11172;
state_11172 = G__12985;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_11172){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_11172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto__))
})();var state__7540__auto__ = (function (){var statearr_11189 = f__7539__auto__.call(null);(statearr_11189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto__);
return statearr_11189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto__))
);
return c__7538__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7538__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto__){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto__){
return (function (state_11251){var state_val_11252 = (state_11251[1]);if((state_val_11252 === 1))
{var inst_11231 = cljs.core.seq.call(null,coll);var inst_11232 = inst_11231;var state_11251__$1 = (function (){var statearr_11253 = state_11251;(statearr_11253[7] = inst_11232);
return statearr_11253;
})();var statearr_11254_12986 = state_11251__$1;(statearr_11254_12986[2] = null);
(statearr_11254_12986[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 2))
{var inst_11232 = (state_11251[7]);var state_11251__$1 = state_11251;if(cljs.core.truth_(inst_11232))
{var statearr_11255_12987 = state_11251__$1;(statearr_11255_12987[1] = 4);
} else
{var statearr_11256_12988 = state_11251__$1;(statearr_11256_12988[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 3))
{var inst_11249 = (state_11251[2]);var state_11251__$1 = state_11251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11251__$1,inst_11249);
} else
{if((state_val_11252 === 4))
{var inst_11232 = (state_11251[7]);var inst_11235 = cljs.core.first.call(null,inst_11232);var state_11251__$1 = state_11251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11251__$1,7,ch,inst_11235);
} else
{if((state_val_11252 === 5))
{var state_11251__$1 = state_11251;if(cljs.core.truth_(close_QMARK_))
{var statearr_11257_12989 = state_11251__$1;(statearr_11257_12989[1] = 8);
} else
{var statearr_11258_12990 = state_11251__$1;(statearr_11258_12990[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 6))
{var inst_11247 = (state_11251[2]);var state_11251__$1 = state_11251;var statearr_11259_12991 = state_11251__$1;(statearr_11259_12991[2] = inst_11247);
(statearr_11259_12991[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 7))
{var inst_11232 = (state_11251[7]);var inst_11237 = (state_11251[2]);var inst_11238 = cljs.core.next.call(null,inst_11232);var inst_11232__$1 = inst_11238;var state_11251__$1 = (function (){var statearr_11260 = state_11251;(statearr_11260[8] = inst_11237);
(statearr_11260[7] = inst_11232__$1);
return statearr_11260;
})();var statearr_11261_12992 = state_11251__$1;(statearr_11261_12992[2] = null);
(statearr_11261_12992[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 8))
{var inst_11242 = cljs.core.async.close_BANG_.call(null,ch);var state_11251__$1 = state_11251;var statearr_11262_12993 = state_11251__$1;(statearr_11262_12993[2] = inst_11242);
(statearr_11262_12993[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 9))
{var state_11251__$1 = state_11251;var statearr_11263_12994 = state_11251__$1;(statearr_11263_12994[2] = null);
(statearr_11263_12994[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11252 === 10))
{var inst_11245 = (state_11251[2]);var state_11251__$1 = state_11251;var statearr_11264_12995 = state_11251__$1;(statearr_11264_12995[2] = inst_11245);
(statearr_11264_12995[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto__))
;return ((function (switch__7468__auto__,c__7538__auto__){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_11268 = [null,null,null,null,null,null,null,null,null];(statearr_11268[0] = state_machine__7469__auto__);
(statearr_11268[1] = 1);
return statearr_11268;
});
var state_machine__7469__auto____1 = (function (state_11251){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_11251);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e11269){if((e11269 instanceof Object))
{var ex__7472__auto__ = e11269;var statearr_11270_12996 = state_11251;(statearr_11270_12996[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11251);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11269;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12997 = state_11251;
state_11251 = G__12997;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_11251){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_11251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto__))
})();var state__7540__auto__ = (function (){var statearr_11271 = f__7539__auto__.call(null);(statearr_11271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto__);
return statearr_11271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto__))
);
return c__7538__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11273 = {};return obj11273;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__4879__auto__ = _;if(and__4879__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__4879__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__5518__auto__ = (((_ == null))?null:_);return (function (){var or__4891__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11275 = {};return obj11275;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__4879__auto__ = m;if(and__4879__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__4879__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__5518__auto__ = (((m == null))?null:m);return (function (){var or__4891__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__4879__auto__ = m;if(and__4879__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__4879__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__5518__auto__ = (((m == null))?null:m);return (function (){var or__4891__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__4879__auto__ = m;if(and__4879__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__4879__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__5518__auto__ = (((m == null))?null:m);return (function (){var or__4891__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11499 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11499 = (function (cs,ch,mult,meta11500){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11500 = meta11500;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11499.cljs$lang$type = true;
cljs.core.async.t11499.cljs$lang$ctorStr = "cljs.core.async/t11499";
cljs.core.async.t11499.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async/t11499");
});})(cs))
;
cljs.core.async.t11499.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11499.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11499.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11499.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11499.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11499.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11499.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11501){var self__ = this;
var _11501__$1 = this;return self__.meta11500;
});})(cs))
;
cljs.core.async.t11499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11501,meta11500__$1){var self__ = this;
var _11501__$1 = this;return (new cljs.core.async.t11499(self__.cs,self__.ch,self__.mult,meta11500__$1));
});})(cs))
;
cljs.core.async.__GT_t11499 = ((function (cs){
return (function __GT_t11499(cs__$1,ch__$1,mult__$1,meta11500){return (new cljs.core.async.t11499(cs__$1,ch__$1,mult__$1,meta11500));
});})(cs))
;
}
return (new cljs.core.async.t11499(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7538__auto___12998 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto___12998,cs,m,dchan,dctr,done){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto___12998,cs,m,dchan,dctr,done){
return (function (state_11636){var state_val_11637 = (state_11636[1]);if((state_val_11637 === 32))
{var inst_11504 = (state_11636[7]);var inst_11580 = (state_11636[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11636,31,Object,null,30);var inst_11587 = cljs.core.async.put_BANG_.call(null,inst_11580,inst_11504,done);var state_11636__$1 = state_11636;var statearr_11638_12999 = state_11636__$1;(statearr_11638_12999[2] = inst_11587);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11636__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 1))
{var state_11636__$1 = state_11636;var statearr_11639_13000 = state_11636__$1;(statearr_11639_13000[2] = null);
(statearr_11639_13000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 33))
{var inst_11593 = (state_11636[9]);var inst_11595 = cljs.core.chunked_seq_QMARK_.call(null,inst_11593);var state_11636__$1 = state_11636;if(inst_11595)
{var statearr_11640_13001 = state_11636__$1;(statearr_11640_13001[1] = 36);
} else
{var statearr_11641_13002 = state_11636__$1;(statearr_11641_13002[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 2))
{var state_11636__$1 = state_11636;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11636__$1,4,ch);
} else
{if((state_val_11637 === 34))
{var state_11636__$1 = state_11636;var statearr_11642_13003 = state_11636__$1;(statearr_11642_13003[2] = null);
(statearr_11642_13003[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 3))
{var inst_11634 = (state_11636[2]);var state_11636__$1 = state_11636;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11636__$1,inst_11634);
} else
{if((state_val_11637 === 35))
{var inst_11618 = (state_11636[2]);var state_11636__$1 = state_11636;var statearr_11643_13004 = state_11636__$1;(statearr_11643_13004[2] = inst_11618);
(statearr_11643_13004[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 4))
{var inst_11504 = (state_11636[7]);var inst_11504__$1 = (state_11636[2]);var inst_11505 = (inst_11504__$1 == null);var state_11636__$1 = (function (){var statearr_11644 = state_11636;(statearr_11644[7] = inst_11504__$1);
return statearr_11644;
})();if(cljs.core.truth_(inst_11505))
{var statearr_11645_13005 = state_11636__$1;(statearr_11645_13005[1] = 5);
} else
{var statearr_11646_13006 = state_11636__$1;(statearr_11646_13006[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 36))
{var inst_11593 = (state_11636[9]);var inst_11597 = cljs.core.chunk_first.call(null,inst_11593);var inst_11598 = cljs.core.chunk_rest.call(null,inst_11593);var inst_11599 = cljs.core.count.call(null,inst_11597);var inst_11572 = inst_11598;var inst_11573 = inst_11597;var inst_11574 = inst_11599;var inst_11575 = 0;var state_11636__$1 = (function (){var statearr_11647 = state_11636;(statearr_11647[10] = inst_11572);
(statearr_11647[11] = inst_11575);
(statearr_11647[12] = inst_11574);
(statearr_11647[13] = inst_11573);
return statearr_11647;
})();var statearr_11648_13007 = state_11636__$1;(statearr_11648_13007[2] = null);
(statearr_11648_13007[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 5))
{var inst_11511 = cljs.core.deref.call(null,cs);var inst_11512 = cljs.core.seq.call(null,inst_11511);var inst_11513 = inst_11512;var inst_11514 = null;var inst_11515 = 0;var inst_11516 = 0;var state_11636__$1 = (function (){var statearr_11649 = state_11636;(statearr_11649[14] = inst_11516);
(statearr_11649[15] = inst_11515);
(statearr_11649[16] = inst_11513);
(statearr_11649[17] = inst_11514);
return statearr_11649;
})();var statearr_11650_13008 = state_11636__$1;(statearr_11650_13008[2] = null);
(statearr_11650_13008[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 37))
{var inst_11593 = (state_11636[9]);var inst_11602 = cljs.core.first.call(null,inst_11593);var state_11636__$1 = (function (){var statearr_11651 = state_11636;(statearr_11651[18] = inst_11602);
return statearr_11651;
})();var statearr_11652_13009 = state_11636__$1;(statearr_11652_13009[2] = null);
(statearr_11652_13009[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 6))
{var inst_11564 = (state_11636[19]);var inst_11563 = cljs.core.deref.call(null,cs);var inst_11564__$1 = cljs.core.keys.call(null,inst_11563);var inst_11565 = cljs.core.count.call(null,inst_11564__$1);var inst_11566 = cljs.core.reset_BANG_.call(null,dctr,inst_11565);var inst_11571 = cljs.core.seq.call(null,inst_11564__$1);var inst_11572 = inst_11571;var inst_11573 = null;var inst_11574 = 0;var inst_11575 = 0;var state_11636__$1 = (function (){var statearr_11653 = state_11636;(statearr_11653[10] = inst_11572);
(statearr_11653[20] = inst_11566);
(statearr_11653[11] = inst_11575);
(statearr_11653[12] = inst_11574);
(statearr_11653[13] = inst_11573);
(statearr_11653[19] = inst_11564__$1);
return statearr_11653;
})();var statearr_11654_13010 = state_11636__$1;(statearr_11654_13010[2] = null);
(statearr_11654_13010[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 38))
{var inst_11615 = (state_11636[2]);var state_11636__$1 = state_11636;var statearr_11655_13011 = state_11636__$1;(statearr_11655_13011[2] = inst_11615);
(statearr_11655_13011[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 7))
{var inst_11632 = (state_11636[2]);var state_11636__$1 = state_11636;var statearr_11656_13012 = state_11636__$1;(statearr_11656_13012[2] = inst_11632);
(statearr_11656_13012[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 39))
{var inst_11593 = (state_11636[9]);var inst_11611 = (state_11636[2]);var inst_11612 = cljs.core.next.call(null,inst_11593);var inst_11572 = inst_11612;var inst_11573 = null;var inst_11574 = 0;var inst_11575 = 0;var state_11636__$1 = (function (){var statearr_11657 = state_11636;(statearr_11657[10] = inst_11572);
(statearr_11657[21] = inst_11611);
(statearr_11657[11] = inst_11575);
(statearr_11657[12] = inst_11574);
(statearr_11657[13] = inst_11573);
return statearr_11657;
})();var statearr_11658_13013 = state_11636__$1;(statearr_11658_13013[2] = null);
(statearr_11658_13013[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 8))
{var inst_11516 = (state_11636[14]);var inst_11515 = (state_11636[15]);var inst_11518 = (inst_11516 < inst_11515);var inst_11519 = inst_11518;var state_11636__$1 = state_11636;if(cljs.core.truth_(inst_11519))
{var statearr_11659_13014 = state_11636__$1;(statearr_11659_13014[1] = 10);
} else
{var statearr_11660_13015 = state_11636__$1;(statearr_11660_13015[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 40))
{var inst_11602 = (state_11636[18]);var inst_11603 = (state_11636[2]);var inst_11604 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11605 = cljs.core.async.untap_STAR_.call(null,m,inst_11602);var state_11636__$1 = (function (){var statearr_11661 = state_11636;(statearr_11661[22] = inst_11604);
(statearr_11661[23] = inst_11603);
return statearr_11661;
})();var statearr_11662_13016 = state_11636__$1;(statearr_11662_13016[2] = inst_11605);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11636__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 9))
{var inst_11561 = (state_11636[2]);var state_11636__$1 = state_11636;var statearr_11663_13017 = state_11636__$1;(statearr_11663_13017[2] = inst_11561);
(statearr_11663_13017[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 41))
{var inst_11504 = (state_11636[7]);var inst_11602 = (state_11636[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11636,40,Object,null,39);var inst_11609 = cljs.core.async.put_BANG_.call(null,inst_11602,inst_11504,done);var state_11636__$1 = state_11636;var statearr_11664_13018 = state_11636__$1;(statearr_11664_13018[2] = inst_11609);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11636__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 10))
{var inst_11516 = (state_11636[14]);var inst_11514 = (state_11636[17]);var inst_11522 = cljs.core._nth.call(null,inst_11514,inst_11516);var inst_11523 = cljs.core.nth.call(null,inst_11522,0,null);var inst_11524 = cljs.core.nth.call(null,inst_11522,1,null);var state_11636__$1 = (function (){var statearr_11665 = state_11636;(statearr_11665[24] = inst_11523);
return statearr_11665;
})();if(cljs.core.truth_(inst_11524))
{var statearr_11666_13019 = state_11636__$1;(statearr_11666_13019[1] = 13);
} else
{var statearr_11667_13020 = state_11636__$1;(statearr_11667_13020[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 42))
{var state_11636__$1 = state_11636;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11636__$1,45,dchan);
} else
{if((state_val_11637 === 11))
{var inst_11533 = (state_11636[25]);var inst_11513 = (state_11636[16]);var inst_11533__$1 = cljs.core.seq.call(null,inst_11513);var state_11636__$1 = (function (){var statearr_11668 = state_11636;(statearr_11668[25] = inst_11533__$1);
return statearr_11668;
})();if(inst_11533__$1)
{var statearr_11669_13021 = state_11636__$1;(statearr_11669_13021[1] = 16);
} else
{var statearr_11670_13022 = state_11636__$1;(statearr_11670_13022[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 43))
{var state_11636__$1 = state_11636;var statearr_11671_13023 = state_11636__$1;(statearr_11671_13023[2] = null);
(statearr_11671_13023[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 12))
{var inst_11559 = (state_11636[2]);var state_11636__$1 = state_11636;var statearr_11672_13024 = state_11636__$1;(statearr_11672_13024[2] = inst_11559);
(statearr_11672_13024[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 44))
{var inst_11629 = (state_11636[2]);var state_11636__$1 = (function (){var statearr_11673 = state_11636;(statearr_11673[26] = inst_11629);
return statearr_11673;
})();var statearr_11674_13025 = state_11636__$1;(statearr_11674_13025[2] = null);
(statearr_11674_13025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 13))
{var inst_11523 = (state_11636[24]);var inst_11526 = cljs.core.async.close_BANG_.call(null,inst_11523);var state_11636__$1 = state_11636;var statearr_11675_13026 = state_11636__$1;(statearr_11675_13026[2] = inst_11526);
(statearr_11675_13026[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 45))
{var inst_11626 = (state_11636[2]);var state_11636__$1 = state_11636;var statearr_11679_13027 = state_11636__$1;(statearr_11679_13027[2] = inst_11626);
(statearr_11679_13027[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 14))
{var state_11636__$1 = state_11636;var statearr_11680_13028 = state_11636__$1;(statearr_11680_13028[2] = null);
(statearr_11680_13028[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 15))
{var inst_11516 = (state_11636[14]);var inst_11515 = (state_11636[15]);var inst_11513 = (state_11636[16]);var inst_11514 = (state_11636[17]);var inst_11529 = (state_11636[2]);var inst_11530 = (inst_11516 + 1);var tmp11676 = inst_11515;var tmp11677 = inst_11513;var tmp11678 = inst_11514;var inst_11513__$1 = tmp11677;var inst_11514__$1 = tmp11678;var inst_11515__$1 = tmp11676;var inst_11516__$1 = inst_11530;var state_11636__$1 = (function (){var statearr_11681 = state_11636;(statearr_11681[14] = inst_11516__$1);
(statearr_11681[15] = inst_11515__$1);
(statearr_11681[27] = inst_11529);
(statearr_11681[16] = inst_11513__$1);
(statearr_11681[17] = inst_11514__$1);
return statearr_11681;
})();var statearr_11682_13029 = state_11636__$1;(statearr_11682_13029[2] = null);
(statearr_11682_13029[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 16))
{var inst_11533 = (state_11636[25]);var inst_11535 = cljs.core.chunked_seq_QMARK_.call(null,inst_11533);var state_11636__$1 = state_11636;if(inst_11535)
{var statearr_11683_13030 = state_11636__$1;(statearr_11683_13030[1] = 19);
} else
{var statearr_11684_13031 = state_11636__$1;(statearr_11684_13031[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 17))
{var state_11636__$1 = state_11636;var statearr_11685_13032 = state_11636__$1;(statearr_11685_13032[2] = null);
(statearr_11685_13032[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 18))
{var inst_11557 = (state_11636[2]);var state_11636__$1 = state_11636;var statearr_11686_13033 = state_11636__$1;(statearr_11686_13033[2] = inst_11557);
(statearr_11686_13033[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 19))
{var inst_11533 = (state_11636[25]);var inst_11537 = cljs.core.chunk_first.call(null,inst_11533);var inst_11538 = cljs.core.chunk_rest.call(null,inst_11533);var inst_11539 = cljs.core.count.call(null,inst_11537);var inst_11513 = inst_11538;var inst_11514 = inst_11537;var inst_11515 = inst_11539;var inst_11516 = 0;var state_11636__$1 = (function (){var statearr_11687 = state_11636;(statearr_11687[14] = inst_11516);
(statearr_11687[15] = inst_11515);
(statearr_11687[16] = inst_11513);
(statearr_11687[17] = inst_11514);
return statearr_11687;
})();var statearr_11688_13034 = state_11636__$1;(statearr_11688_13034[2] = null);
(statearr_11688_13034[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 20))
{var inst_11533 = (state_11636[25]);var inst_11543 = cljs.core.first.call(null,inst_11533);var inst_11544 = cljs.core.nth.call(null,inst_11543,0,null);var inst_11545 = cljs.core.nth.call(null,inst_11543,1,null);var state_11636__$1 = (function (){var statearr_11689 = state_11636;(statearr_11689[28] = inst_11544);
return statearr_11689;
})();if(cljs.core.truth_(inst_11545))
{var statearr_11690_13035 = state_11636__$1;(statearr_11690_13035[1] = 22);
} else
{var statearr_11691_13036 = state_11636__$1;(statearr_11691_13036[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 21))
{var inst_11554 = (state_11636[2]);var state_11636__$1 = state_11636;var statearr_11692_13037 = state_11636__$1;(statearr_11692_13037[2] = inst_11554);
(statearr_11692_13037[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 22))
{var inst_11544 = (state_11636[28]);var inst_11547 = cljs.core.async.close_BANG_.call(null,inst_11544);var state_11636__$1 = state_11636;var statearr_11693_13038 = state_11636__$1;(statearr_11693_13038[2] = inst_11547);
(statearr_11693_13038[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 23))
{var state_11636__$1 = state_11636;var statearr_11694_13039 = state_11636__$1;(statearr_11694_13039[2] = null);
(statearr_11694_13039[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 24))
{var inst_11533 = (state_11636[25]);var inst_11550 = (state_11636[2]);var inst_11551 = cljs.core.next.call(null,inst_11533);var inst_11513 = inst_11551;var inst_11514 = null;var inst_11515 = 0;var inst_11516 = 0;var state_11636__$1 = (function (){var statearr_11695 = state_11636;(statearr_11695[14] = inst_11516);
(statearr_11695[15] = inst_11515);
(statearr_11695[29] = inst_11550);
(statearr_11695[16] = inst_11513);
(statearr_11695[17] = inst_11514);
return statearr_11695;
})();var statearr_11696_13040 = state_11636__$1;(statearr_11696_13040[2] = null);
(statearr_11696_13040[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 25))
{var inst_11575 = (state_11636[11]);var inst_11574 = (state_11636[12]);var inst_11577 = (inst_11575 < inst_11574);var inst_11578 = inst_11577;var state_11636__$1 = state_11636;if(cljs.core.truth_(inst_11578))
{var statearr_11697_13041 = state_11636__$1;(statearr_11697_13041[1] = 27);
} else
{var statearr_11698_13042 = state_11636__$1;(statearr_11698_13042[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 26))
{var inst_11564 = (state_11636[19]);var inst_11622 = (state_11636[2]);var inst_11623 = cljs.core.seq.call(null,inst_11564);var state_11636__$1 = (function (){var statearr_11699 = state_11636;(statearr_11699[30] = inst_11622);
return statearr_11699;
})();if(inst_11623)
{var statearr_11700_13043 = state_11636__$1;(statearr_11700_13043[1] = 42);
} else
{var statearr_11701_13044 = state_11636__$1;(statearr_11701_13044[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 27))
{var inst_11575 = (state_11636[11]);var inst_11573 = (state_11636[13]);var inst_11580 = cljs.core._nth.call(null,inst_11573,inst_11575);var state_11636__$1 = (function (){var statearr_11702 = state_11636;(statearr_11702[8] = inst_11580);
return statearr_11702;
})();var statearr_11703_13045 = state_11636__$1;(statearr_11703_13045[2] = null);
(statearr_11703_13045[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 28))
{var inst_11572 = (state_11636[10]);var inst_11593 = (state_11636[9]);var inst_11593__$1 = cljs.core.seq.call(null,inst_11572);var state_11636__$1 = (function (){var statearr_11707 = state_11636;(statearr_11707[9] = inst_11593__$1);
return statearr_11707;
})();if(inst_11593__$1)
{var statearr_11708_13046 = state_11636__$1;(statearr_11708_13046[1] = 33);
} else
{var statearr_11709_13047 = state_11636__$1;(statearr_11709_13047[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 29))
{var inst_11620 = (state_11636[2]);var state_11636__$1 = state_11636;var statearr_11710_13048 = state_11636__$1;(statearr_11710_13048[2] = inst_11620);
(statearr_11710_13048[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 30))
{var inst_11572 = (state_11636[10]);var inst_11575 = (state_11636[11]);var inst_11574 = (state_11636[12]);var inst_11573 = (state_11636[13]);var inst_11589 = (state_11636[2]);var inst_11590 = (inst_11575 + 1);var tmp11704 = inst_11572;var tmp11705 = inst_11574;var tmp11706 = inst_11573;var inst_11572__$1 = tmp11704;var inst_11573__$1 = tmp11706;var inst_11574__$1 = tmp11705;var inst_11575__$1 = inst_11590;var state_11636__$1 = (function (){var statearr_11711 = state_11636;(statearr_11711[10] = inst_11572__$1);
(statearr_11711[11] = inst_11575__$1);
(statearr_11711[12] = inst_11574__$1);
(statearr_11711[13] = inst_11573__$1);
(statearr_11711[31] = inst_11589);
return statearr_11711;
})();var statearr_11712_13049 = state_11636__$1;(statearr_11712_13049[2] = null);
(statearr_11712_13049[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 31))
{var inst_11580 = (state_11636[8]);var inst_11581 = (state_11636[2]);var inst_11582 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11583 = cljs.core.async.untap_STAR_.call(null,m,inst_11580);var state_11636__$1 = (function (){var statearr_11713 = state_11636;(statearr_11713[32] = inst_11582);
(statearr_11713[33] = inst_11581);
return statearr_11713;
})();var statearr_11714_13050 = state_11636__$1;(statearr_11714_13050[2] = inst_11583);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11636__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto___12998,cs,m,dchan,dctr,done))
;return ((function (switch__7468__auto__,c__7538__auto___12998,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_11718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11718[0] = state_machine__7469__auto__);
(statearr_11718[1] = 1);
return statearr_11718;
});
var state_machine__7469__auto____1 = (function (state_11636){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_11636);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e11719){if((e11719 instanceof Object))
{var ex__7472__auto__ = e11719;var statearr_11720_13051 = state_11636;(statearr_11720_13051[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11636);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13052 = state_11636;
state_11636 = G__13052;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_11636){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_11636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto___12998,cs,m,dchan,dctr,done))
})();var state__7540__auto__ = (function (){var statearr_11721 = f__7539__auto__.call(null);(statearr_11721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto___12998);
return statearr_11721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto___12998,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11723 = {};return obj11723;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__4879__auto__ = m;if(and__4879__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__4879__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__5518__auto__ = (((m == null))?null:m);return (function (){var or__4891__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__4879__auto__ = m;if(and__4879__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__4879__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__5518__auto__ = (((m == null))?null:m);return (function (){var or__4891__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__4879__auto__ = m;if(and__4879__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__4879__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__5518__auto__ = (((m == null))?null:m);return (function (){var or__4891__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__4879__auto__ = m;if(and__4879__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__4879__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__5518__auto__ = (((m == null))?null:m);return (function (){var or__4891__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__4879__auto__ = m;if(and__4879__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__4879__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__5518__auto__ = (((m == null))?null:m);return (function (){var or__4891__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11833 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11833 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11834){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11834 = meta11834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11833.cljs$lang$type = true;
cljs.core.async.t11833.cljs$lang$ctorStr = "cljs.core.async/t11833";
cljs.core.async.t11833.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async/t11833");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11833.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11833.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11833.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11833.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11833.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11833.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11833.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11833.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11833.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11835){var self__ = this;
var _11835__$1 = this;return self__.meta11834;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11835,meta11834__$1){var self__ = this;
var _11835__$1 = this;return (new cljs.core.async.t11833(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11834__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11833 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11833(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11834){return (new cljs.core.async.t11833(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11834));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11833(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__7538__auto___13053 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto___13053,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto___13053,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11900){var state_val_11901 = (state_11900[1]);if((state_val_11901 === 1))
{var inst_11839 = (state_11900[7]);var inst_11839__$1 = calc_state.call(null);var inst_11840 = cljs.core.seq_QMARK_.call(null,inst_11839__$1);var state_11900__$1 = (function (){var statearr_11902 = state_11900;(statearr_11902[7] = inst_11839__$1);
return statearr_11902;
})();if(inst_11840)
{var statearr_11903_13054 = state_11900__$1;(statearr_11903_13054[1] = 2);
} else
{var statearr_11904_13055 = state_11900__$1;(statearr_11904_13055[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 2))
{var inst_11839 = (state_11900[7]);var inst_11842 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11839);var state_11900__$1 = state_11900;var statearr_11905_13056 = state_11900__$1;(statearr_11905_13056[2] = inst_11842);
(statearr_11905_13056[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 3))
{var inst_11839 = (state_11900[7]);var state_11900__$1 = state_11900;var statearr_11906_13057 = state_11900__$1;(statearr_11906_13057[2] = inst_11839);
(statearr_11906_13057[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 4))
{var inst_11839 = (state_11900[7]);var inst_11845 = (state_11900[2]);var inst_11846 = cljs.core.get.call(null,inst_11845,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11847 = cljs.core.get.call(null,inst_11845,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11848 = cljs.core.get.call(null,inst_11845,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11849 = inst_11839;var state_11900__$1 = (function (){var statearr_11907 = state_11900;(statearr_11907[8] = inst_11846);
(statearr_11907[9] = inst_11848);
(statearr_11907[10] = inst_11847);
(statearr_11907[11] = inst_11849);
return statearr_11907;
})();var statearr_11908_13058 = state_11900__$1;(statearr_11908_13058[2] = null);
(statearr_11908_13058[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 5))
{var inst_11849 = (state_11900[11]);var inst_11852 = cljs.core.seq_QMARK_.call(null,inst_11849);var state_11900__$1 = state_11900;if(inst_11852)
{var statearr_11909_13059 = state_11900__$1;(statearr_11909_13059[1] = 7);
} else
{var statearr_11910_13060 = state_11900__$1;(statearr_11910_13060[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 6))
{var inst_11898 = (state_11900[2]);var state_11900__$1 = state_11900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11900__$1,inst_11898);
} else
{if((state_val_11901 === 7))
{var inst_11849 = (state_11900[11]);var inst_11854 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11849);var state_11900__$1 = state_11900;var statearr_11911_13061 = state_11900__$1;(statearr_11911_13061[2] = inst_11854);
(statearr_11911_13061[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 8))
{var inst_11849 = (state_11900[11]);var state_11900__$1 = state_11900;var statearr_11912_13062 = state_11900__$1;(statearr_11912_13062[2] = inst_11849);
(statearr_11912_13062[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 9))
{var inst_11857 = (state_11900[12]);var inst_11857__$1 = (state_11900[2]);var inst_11858 = cljs.core.get.call(null,inst_11857__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11859 = cljs.core.get.call(null,inst_11857__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11860 = cljs.core.get.call(null,inst_11857__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11900__$1 = (function (){var statearr_11913 = state_11900;(statearr_11913[13] = inst_11860);
(statearr_11913[12] = inst_11857__$1);
(statearr_11913[14] = inst_11859);
return statearr_11913;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11900__$1,10,inst_11858);
} else
{if((state_val_11901 === 10))
{var inst_11864 = (state_11900[15]);var inst_11865 = (state_11900[16]);var inst_11863 = (state_11900[2]);var inst_11864__$1 = cljs.core.nth.call(null,inst_11863,0,null);var inst_11865__$1 = cljs.core.nth.call(null,inst_11863,1,null);var inst_11866 = (inst_11864__$1 == null);var inst_11867 = cljs.core._EQ_.call(null,inst_11865__$1,change);var inst_11868 = (inst_11866) || (inst_11867);var state_11900__$1 = (function (){var statearr_11914 = state_11900;(statearr_11914[15] = inst_11864__$1);
(statearr_11914[16] = inst_11865__$1);
return statearr_11914;
})();if(cljs.core.truth_(inst_11868))
{var statearr_11915_13063 = state_11900__$1;(statearr_11915_13063[1] = 11);
} else
{var statearr_11916_13064 = state_11900__$1;(statearr_11916_13064[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 11))
{var inst_11864 = (state_11900[15]);var inst_11870 = (inst_11864 == null);var state_11900__$1 = state_11900;if(cljs.core.truth_(inst_11870))
{var statearr_11917_13065 = state_11900__$1;(statearr_11917_13065[1] = 14);
} else
{var statearr_11918_13066 = state_11900__$1;(statearr_11918_13066[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 12))
{var inst_11860 = (state_11900[13]);var inst_11879 = (state_11900[17]);var inst_11865 = (state_11900[16]);var inst_11879__$1 = inst_11860.call(null,inst_11865);var state_11900__$1 = (function (){var statearr_11919 = state_11900;(statearr_11919[17] = inst_11879__$1);
return statearr_11919;
})();if(cljs.core.truth_(inst_11879__$1))
{var statearr_11920_13067 = state_11900__$1;(statearr_11920_13067[1] = 17);
} else
{var statearr_11921_13068 = state_11900__$1;(statearr_11921_13068[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 13))
{var inst_11896 = (state_11900[2]);var state_11900__$1 = state_11900;var statearr_11922_13069 = state_11900__$1;(statearr_11922_13069[2] = inst_11896);
(statearr_11922_13069[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 14))
{var inst_11865 = (state_11900[16]);var inst_11872 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11865);var state_11900__$1 = state_11900;var statearr_11923_13070 = state_11900__$1;(statearr_11923_13070[2] = inst_11872);
(statearr_11923_13070[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 15))
{var state_11900__$1 = state_11900;var statearr_11924_13071 = state_11900__$1;(statearr_11924_13071[2] = null);
(statearr_11924_13071[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 16))
{var inst_11875 = (state_11900[2]);var inst_11876 = calc_state.call(null);var inst_11849 = inst_11876;var state_11900__$1 = (function (){var statearr_11925 = state_11900;(statearr_11925[18] = inst_11875);
(statearr_11925[11] = inst_11849);
return statearr_11925;
})();var statearr_11926_13072 = state_11900__$1;(statearr_11926_13072[2] = null);
(statearr_11926_13072[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 17))
{var inst_11879 = (state_11900[17]);var state_11900__$1 = state_11900;var statearr_11927_13073 = state_11900__$1;(statearr_11927_13073[2] = inst_11879);
(statearr_11927_13073[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 18))
{var inst_11860 = (state_11900[13]);var inst_11859 = (state_11900[14]);var inst_11865 = (state_11900[16]);var inst_11882 = cljs.core.empty_QMARK_.call(null,inst_11860);var inst_11883 = inst_11859.call(null,inst_11865);var inst_11884 = cljs.core.not.call(null,inst_11883);var inst_11885 = (inst_11882) && (inst_11884);var state_11900__$1 = state_11900;var statearr_11928_13074 = state_11900__$1;(statearr_11928_13074[2] = inst_11885);
(statearr_11928_13074[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 19))
{var inst_11887 = (state_11900[2]);var state_11900__$1 = state_11900;if(cljs.core.truth_(inst_11887))
{var statearr_11929_13075 = state_11900__$1;(statearr_11929_13075[1] = 20);
} else
{var statearr_11930_13076 = state_11900__$1;(statearr_11930_13076[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 20))
{var inst_11864 = (state_11900[15]);var state_11900__$1 = state_11900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11900__$1,23,out,inst_11864);
} else
{if((state_val_11901 === 21))
{var state_11900__$1 = state_11900;var statearr_11931_13077 = state_11900__$1;(statearr_11931_13077[2] = null);
(statearr_11931_13077[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 22))
{var inst_11857 = (state_11900[12]);var inst_11893 = (state_11900[2]);var inst_11849 = inst_11857;var state_11900__$1 = (function (){var statearr_11932 = state_11900;(statearr_11932[19] = inst_11893);
(statearr_11932[11] = inst_11849);
return statearr_11932;
})();var statearr_11933_13078 = state_11900__$1;(statearr_11933_13078[2] = null);
(statearr_11933_13078[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 23))
{var inst_11890 = (state_11900[2]);var state_11900__$1 = state_11900;var statearr_11934_13079 = state_11900__$1;(statearr_11934_13079[2] = inst_11890);
(statearr_11934_13079[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto___13053,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__7468__auto__,c__7538__auto___13053,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_11938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11938[0] = state_machine__7469__auto__);
(statearr_11938[1] = 1);
return statearr_11938;
});
var state_machine__7469__auto____1 = (function (state_11900){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_11900);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e11939){if((e11939 instanceof Object))
{var ex__7472__auto__ = e11939;var statearr_11940_13080 = state_11900;(statearr_11940_13080[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11900);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11939;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13081 = state_11900;
state_11900 = G__13081;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_11900){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_11900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto___13053,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__7540__auto__ = (function (){var statearr_11941 = f__7539__auto__.call(null);(statearr_11941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto___13053);
return statearr_11941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto___13053,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11943 = {};return obj11943;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__4879__auto__ = p;if(and__4879__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__4879__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__5518__auto__ = (((p == null))?null:p);return (function (){var or__4891__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__4879__auto__ = p;if(and__4879__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__4879__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__5518__auto__ = (((p == null))?null:p);return (function (){var or__4891__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__4879__auto__ = p;if(and__4879__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__4879__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__5518__auto__ = (((p == null))?null:p);return (function (){var or__4891__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__4879__auto__ = p;if(and__4879__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__4879__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__5518__auto__ = (((p == null))?null:p);return (function (){var or__4891__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5518__auto__)]);if(or__4891__auto__)
{return or__4891__auto__;
} else
{var or__4891__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4891__auto____$1)
{return or__4891__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__4891__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__4891__auto__))
{return or__4891__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4891__auto__,mults){
return (function (p1__11944_SHARP_){if(cljs.core.truth_(p1__11944_SHARP_.call(null,topic)))
{return p1__11944_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11944_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4891__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12069 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12069 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12070){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12070 = meta12070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12069.cljs$lang$type = true;
cljs.core.async.t12069.cljs$lang$ctorStr = "cljs.core.async/t12069";
cljs.core.async.t12069.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5458__auto__,writer__5459__auto__,opt__5460__auto__){return cljs.core._write.call(null,writer__5459__auto__,"cljs.core.async/t12069");
});})(mults,ensure_mult))
;
cljs.core.async.t12069.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12069.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12069.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12069.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12069.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12069.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12069.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12069.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12071){var self__ = this;
var _12071__$1 = this;return self__.meta12070;
});})(mults,ensure_mult))
;
cljs.core.async.t12069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12071,meta12070__$1){var self__ = this;
var _12071__$1 = this;return (new cljs.core.async.t12069(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12070__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12069 = ((function (mults,ensure_mult){
return (function __GT_t12069(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12070){return (new cljs.core.async.t12069(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12070));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12069(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7538__auto___13082 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto___13082,mults,ensure_mult,p){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto___13082,mults,ensure_mult,p){
return (function (state_12145){var state_val_12146 = (state_12145[1]);if((state_val_12146 === 1))
{var state_12145__$1 = state_12145;var statearr_12147_13083 = state_12145__$1;(statearr_12147_13083[2] = null);
(statearr_12147_13083[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 2))
{var state_12145__$1 = state_12145;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12145__$1,4,ch);
} else
{if((state_val_12146 === 3))
{var inst_12143 = (state_12145[2]);var state_12145__$1 = state_12145;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12145__$1,inst_12143);
} else
{if((state_val_12146 === 4))
{var inst_12074 = (state_12145[7]);var inst_12074__$1 = (state_12145[2]);var inst_12075 = (inst_12074__$1 == null);var state_12145__$1 = (function (){var statearr_12148 = state_12145;(statearr_12148[7] = inst_12074__$1);
return statearr_12148;
})();if(cljs.core.truth_(inst_12075))
{var statearr_12149_13084 = state_12145__$1;(statearr_12149_13084[1] = 5);
} else
{var statearr_12150_13085 = state_12145__$1;(statearr_12150_13085[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 5))
{var inst_12081 = cljs.core.deref.call(null,mults);var inst_12082 = cljs.core.vals.call(null,inst_12081);var inst_12083 = cljs.core.seq.call(null,inst_12082);var inst_12084 = inst_12083;var inst_12085 = null;var inst_12086 = 0;var inst_12087 = 0;var state_12145__$1 = (function (){var statearr_12151 = state_12145;(statearr_12151[8] = inst_12086);
(statearr_12151[9] = inst_12087);
(statearr_12151[10] = inst_12085);
(statearr_12151[11] = inst_12084);
return statearr_12151;
})();var statearr_12152_13086 = state_12145__$1;(statearr_12152_13086[2] = null);
(statearr_12152_13086[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 6))
{var inst_12074 = (state_12145[7]);var inst_12122 = (state_12145[12]);var inst_12124 = (state_12145[13]);var inst_12122__$1 = topic_fn.call(null,inst_12074);var inst_12123 = cljs.core.deref.call(null,mults);var inst_12124__$1 = cljs.core.get.call(null,inst_12123,inst_12122__$1);var state_12145__$1 = (function (){var statearr_12153 = state_12145;(statearr_12153[12] = inst_12122__$1);
(statearr_12153[13] = inst_12124__$1);
return statearr_12153;
})();if(cljs.core.truth_(inst_12124__$1))
{var statearr_12154_13087 = state_12145__$1;(statearr_12154_13087[1] = 19);
} else
{var statearr_12155_13088 = state_12145__$1;(statearr_12155_13088[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 7))
{var inst_12141 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12156_13089 = state_12145__$1;(statearr_12156_13089[2] = inst_12141);
(statearr_12156_13089[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 8))
{var inst_12086 = (state_12145[8]);var inst_12087 = (state_12145[9]);var inst_12089 = (inst_12087 < inst_12086);var inst_12090 = inst_12089;var state_12145__$1 = state_12145;if(cljs.core.truth_(inst_12090))
{var statearr_12160_13090 = state_12145__$1;(statearr_12160_13090[1] = 10);
} else
{var statearr_12161_13091 = state_12145__$1;(statearr_12161_13091[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 9))
{var inst_12120 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12162_13092 = state_12145__$1;(statearr_12162_13092[2] = inst_12120);
(statearr_12162_13092[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 10))
{var inst_12086 = (state_12145[8]);var inst_12087 = (state_12145[9]);var inst_12085 = (state_12145[10]);var inst_12084 = (state_12145[11]);var inst_12092 = cljs.core._nth.call(null,inst_12085,inst_12087);var inst_12093 = cljs.core.async.muxch_STAR_.call(null,inst_12092);var inst_12094 = cljs.core.async.close_BANG_.call(null,inst_12093);var inst_12095 = (inst_12087 + 1);var tmp12157 = inst_12086;var tmp12158 = inst_12085;var tmp12159 = inst_12084;var inst_12084__$1 = tmp12159;var inst_12085__$1 = tmp12158;var inst_12086__$1 = tmp12157;var inst_12087__$1 = inst_12095;var state_12145__$1 = (function (){var statearr_12163 = state_12145;(statearr_12163[8] = inst_12086__$1);
(statearr_12163[9] = inst_12087__$1);
(statearr_12163[10] = inst_12085__$1);
(statearr_12163[11] = inst_12084__$1);
(statearr_12163[14] = inst_12094);
return statearr_12163;
})();var statearr_12164_13093 = state_12145__$1;(statearr_12164_13093[2] = null);
(statearr_12164_13093[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 11))
{var inst_12084 = (state_12145[11]);var inst_12098 = (state_12145[15]);var inst_12098__$1 = cljs.core.seq.call(null,inst_12084);var state_12145__$1 = (function (){var statearr_12165 = state_12145;(statearr_12165[15] = inst_12098__$1);
return statearr_12165;
})();if(inst_12098__$1)
{var statearr_12166_13094 = state_12145__$1;(statearr_12166_13094[1] = 13);
} else
{var statearr_12167_13095 = state_12145__$1;(statearr_12167_13095[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 12))
{var inst_12118 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12168_13096 = state_12145__$1;(statearr_12168_13096[2] = inst_12118);
(statearr_12168_13096[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 13))
{var inst_12098 = (state_12145[15]);var inst_12100 = cljs.core.chunked_seq_QMARK_.call(null,inst_12098);var state_12145__$1 = state_12145;if(inst_12100)
{var statearr_12169_13097 = state_12145__$1;(statearr_12169_13097[1] = 16);
} else
{var statearr_12170_13098 = state_12145__$1;(statearr_12170_13098[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 14))
{var state_12145__$1 = state_12145;var statearr_12171_13099 = state_12145__$1;(statearr_12171_13099[2] = null);
(statearr_12171_13099[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 15))
{var inst_12116 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12172_13100 = state_12145__$1;(statearr_12172_13100[2] = inst_12116);
(statearr_12172_13100[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 16))
{var inst_12098 = (state_12145[15]);var inst_12102 = cljs.core.chunk_first.call(null,inst_12098);var inst_12103 = cljs.core.chunk_rest.call(null,inst_12098);var inst_12104 = cljs.core.count.call(null,inst_12102);var inst_12084 = inst_12103;var inst_12085 = inst_12102;var inst_12086 = inst_12104;var inst_12087 = 0;var state_12145__$1 = (function (){var statearr_12173 = state_12145;(statearr_12173[8] = inst_12086);
(statearr_12173[9] = inst_12087);
(statearr_12173[10] = inst_12085);
(statearr_12173[11] = inst_12084);
return statearr_12173;
})();var statearr_12174_13101 = state_12145__$1;(statearr_12174_13101[2] = null);
(statearr_12174_13101[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 17))
{var inst_12098 = (state_12145[15]);var inst_12107 = cljs.core.first.call(null,inst_12098);var inst_12108 = cljs.core.async.muxch_STAR_.call(null,inst_12107);var inst_12109 = cljs.core.async.close_BANG_.call(null,inst_12108);var inst_12110 = cljs.core.next.call(null,inst_12098);var inst_12084 = inst_12110;var inst_12085 = null;var inst_12086 = 0;var inst_12087 = 0;var state_12145__$1 = (function (){var statearr_12175 = state_12145;(statearr_12175[8] = inst_12086);
(statearr_12175[9] = inst_12087);
(statearr_12175[10] = inst_12085);
(statearr_12175[11] = inst_12084);
(statearr_12175[16] = inst_12109);
return statearr_12175;
})();var statearr_12176_13102 = state_12145__$1;(statearr_12176_13102[2] = null);
(statearr_12176_13102[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 18))
{var inst_12113 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12177_13103 = state_12145__$1;(statearr_12177_13103[2] = inst_12113);
(statearr_12177_13103[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 19))
{var state_12145__$1 = state_12145;var statearr_12178_13104 = state_12145__$1;(statearr_12178_13104[2] = null);
(statearr_12178_13104[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 20))
{var state_12145__$1 = state_12145;var statearr_12179_13105 = state_12145__$1;(statearr_12179_13105[2] = null);
(statearr_12179_13105[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 21))
{var inst_12138 = (state_12145[2]);var state_12145__$1 = (function (){var statearr_12180 = state_12145;(statearr_12180[17] = inst_12138);
return statearr_12180;
})();var statearr_12181_13106 = state_12145__$1;(statearr_12181_13106[2] = null);
(statearr_12181_13106[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 22))
{var inst_12135 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12182_13107 = state_12145__$1;(statearr_12182_13107[2] = inst_12135);
(statearr_12182_13107[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 23))
{var inst_12122 = (state_12145[12]);var inst_12126 = (state_12145[2]);var inst_12127 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12122);var state_12145__$1 = (function (){var statearr_12183 = state_12145;(statearr_12183[18] = inst_12126);
return statearr_12183;
})();var statearr_12184_13108 = state_12145__$1;(statearr_12184_13108[2] = inst_12127);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12145__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 24))
{var inst_12074 = (state_12145[7]);var inst_12124 = (state_12145[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12145,23,Object,null,22);var inst_12131 = cljs.core.async.muxch_STAR_.call(null,inst_12124);var state_12145__$1 = state_12145;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12145__$1,25,inst_12131,inst_12074);
} else
{if((state_val_12146 === 25))
{var inst_12133 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12185_13109 = state_12145__$1;(statearr_12185_13109[2] = inst_12133);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12145__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto___13082,mults,ensure_mult,p))
;return ((function (switch__7468__auto__,c__7538__auto___13082,mults,ensure_mult,p){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_12189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12189[0] = state_machine__7469__auto__);
(statearr_12189[1] = 1);
return statearr_12189;
});
var state_machine__7469__auto____1 = (function (state_12145){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_12145);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e12190){if((e12190 instanceof Object))
{var ex__7472__auto__ = e12190;var statearr_12191_13110 = state_12145;(statearr_12191_13110[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12145);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13111 = state_12145;
state_12145 = G__13111;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_12145){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_12145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto___13082,mults,ensure_mult,p))
})();var state__7540__auto__ = (function (){var statearr_12192 = f__7539__auto__.call(null);(statearr_12192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto___13082);
return statearr_12192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto___13082,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__7538__auto___13112 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto___13112,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto___13112,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12299){var state_val_12300 = (state_12299[1]);if((state_val_12300 === 1))
{var state_12299__$1 = state_12299;var statearr_12301_13113 = state_12299__$1;(statearr_12301_13113[2] = null);
(statearr_12301_13113[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12300 === 2))
{var inst_12262 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12263 = 0;var state_12299__$1 = (function (){var statearr_12302 = state_12299;(statearr_12302[7] = inst_12262);
(statearr_12302[8] = inst_12263);
return statearr_12302;
})();var statearr_12303_13114 = state_12299__$1;(statearr_12303_13114[2] = null);
(statearr_12303_13114[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12300 === 3))
{var inst_12297 = (state_12299[2]);var state_12299__$1 = state_12299;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12299__$1,inst_12297);
} else
{if((state_val_12300 === 4))
{var inst_12263 = (state_12299[8]);var inst_12265 = (inst_12263 < cnt);var state_12299__$1 = state_12299;if(cljs.core.truth_(inst_12265))
{var statearr_12304_13115 = state_12299__$1;(statearr_12304_13115[1] = 6);
} else
{var statearr_12305_13116 = state_12299__$1;(statearr_12305_13116[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12300 === 5))
{var inst_12283 = (state_12299[2]);var state_12299__$1 = (function (){var statearr_12306 = state_12299;(statearr_12306[9] = inst_12283);
return statearr_12306;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12299__$1,12,dchan);
} else
{if((state_val_12300 === 6))
{var state_12299__$1 = state_12299;var statearr_12307_13117 = state_12299__$1;(statearr_12307_13117[2] = null);
(statearr_12307_13117[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12300 === 7))
{var state_12299__$1 = state_12299;var statearr_12308_13118 = state_12299__$1;(statearr_12308_13118[2] = null);
(statearr_12308_13118[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12300 === 8))
{var inst_12281 = (state_12299[2]);var state_12299__$1 = state_12299;var statearr_12309_13119 = state_12299__$1;(statearr_12309_13119[2] = inst_12281);
(statearr_12309_13119[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12300 === 9))
{var inst_12263 = (state_12299[8]);var inst_12276 = (state_12299[2]);var inst_12277 = (inst_12263 + 1);var inst_12263__$1 = inst_12277;var state_12299__$1 = (function (){var statearr_12310 = state_12299;(statearr_12310[8] = inst_12263__$1);
(statearr_12310[10] = inst_12276);
return statearr_12310;
})();var statearr_12311_13120 = state_12299__$1;(statearr_12311_13120[2] = null);
(statearr_12311_13120[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12300 === 10))
{var inst_12267 = (state_12299[2]);var inst_12268 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12299__$1 = (function (){var statearr_12312 = state_12299;(statearr_12312[11] = inst_12267);
return statearr_12312;
})();var statearr_12313_13121 = state_12299__$1;(statearr_12313_13121[2] = inst_12268);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12299__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12300 === 11))
{var inst_12263 = (state_12299[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12299,10,Object,null,9);var inst_12272 = chs__$1.call(null,inst_12263);var inst_12273 = done.call(null,inst_12263);var inst_12274 = cljs.core.async.take_BANG_.call(null,inst_12272,inst_12273);var state_12299__$1 = state_12299;var statearr_12314_13122 = state_12299__$1;(statearr_12314_13122[2] = inst_12274);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12299__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12300 === 12))
{var inst_12285 = (state_12299[12]);var inst_12285__$1 = (state_12299[2]);var inst_12286 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12285__$1);var state_12299__$1 = (function (){var statearr_12315 = state_12299;(statearr_12315[12] = inst_12285__$1);
return statearr_12315;
})();if(cljs.core.truth_(inst_12286))
{var statearr_12316_13123 = state_12299__$1;(statearr_12316_13123[1] = 13);
} else
{var statearr_12317_13124 = state_12299__$1;(statearr_12317_13124[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12300 === 13))
{var inst_12288 = cljs.core.async.close_BANG_.call(null,out);var state_12299__$1 = state_12299;var statearr_12318_13125 = state_12299__$1;(statearr_12318_13125[2] = inst_12288);
(statearr_12318_13125[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12300 === 14))
{var inst_12285 = (state_12299[12]);var inst_12290 = cljs.core.apply.call(null,f,inst_12285);var state_12299__$1 = state_12299;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12299__$1,16,out,inst_12290);
} else
{if((state_val_12300 === 15))
{var inst_12295 = (state_12299[2]);var state_12299__$1 = state_12299;var statearr_12319_13126 = state_12299__$1;(statearr_12319_13126[2] = inst_12295);
(statearr_12319_13126[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12300 === 16))
{var inst_12292 = (state_12299[2]);var state_12299__$1 = (function (){var statearr_12320 = state_12299;(statearr_12320[13] = inst_12292);
return statearr_12320;
})();var statearr_12321_13127 = state_12299__$1;(statearr_12321_13127[2] = null);
(statearr_12321_13127[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto___13112,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__7468__auto__,c__7538__auto___13112,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_12325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12325[0] = state_machine__7469__auto__);
(statearr_12325[1] = 1);
return statearr_12325;
});
var state_machine__7469__auto____1 = (function (state_12299){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_12299);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e12326){if((e12326 instanceof Object))
{var ex__7472__auto__ = e12326;var statearr_12327_13128 = state_12299;(statearr_12327_13128[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12299);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12326;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13129 = state_12299;
state_12299 = G__13129;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_12299){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_12299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto___13112,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__7540__auto__ = (function (){var statearr_12328 = f__7539__auto__.call(null);(statearr_12328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto___13112);
return statearr_12328;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto___13112,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7538__auto___13130 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto___13130,out){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto___13130,out){
return (function (state_12412){var state_val_12413 = (state_12412[1]);if((state_val_12413 === 1))
{var inst_12383 = cljs.core.vec.call(null,chs);var inst_12384 = inst_12383;var state_12412__$1 = (function (){var statearr_12414 = state_12412;(statearr_12414[7] = inst_12384);
return statearr_12414;
})();var statearr_12415_13131 = state_12412__$1;(statearr_12415_13131[2] = null);
(statearr_12415_13131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12413 === 2))
{var inst_12384 = (state_12412[7]);var inst_12386 = cljs.core.count.call(null,inst_12384);var inst_12387 = (inst_12386 > 0);var state_12412__$1 = state_12412;if(cljs.core.truth_(inst_12387))
{var statearr_12416_13132 = state_12412__$1;(statearr_12416_13132[1] = 4);
} else
{var statearr_12417_13133 = state_12412__$1;(statearr_12417_13133[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12413 === 3))
{var inst_12410 = (state_12412[2]);var state_12412__$1 = state_12412;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12412__$1,inst_12410);
} else
{if((state_val_12413 === 4))
{var inst_12384 = (state_12412[7]);var state_12412__$1 = state_12412;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12412__$1,7,inst_12384);
} else
{if((state_val_12413 === 5))
{var inst_12406 = cljs.core.async.close_BANG_.call(null,out);var state_12412__$1 = state_12412;var statearr_12418_13134 = state_12412__$1;(statearr_12418_13134[2] = inst_12406);
(statearr_12418_13134[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12413 === 6))
{var inst_12408 = (state_12412[2]);var state_12412__$1 = state_12412;var statearr_12419_13135 = state_12412__$1;(statearr_12419_13135[2] = inst_12408);
(statearr_12419_13135[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12413 === 7))
{var inst_12391 = (state_12412[8]);var inst_12392 = (state_12412[9]);var inst_12391__$1 = (state_12412[2]);var inst_12392__$1 = cljs.core.nth.call(null,inst_12391__$1,0,null);var inst_12393 = cljs.core.nth.call(null,inst_12391__$1,1,null);var inst_12394 = (inst_12392__$1 == null);var state_12412__$1 = (function (){var statearr_12420 = state_12412;(statearr_12420[8] = inst_12391__$1);
(statearr_12420[10] = inst_12393);
(statearr_12420[9] = inst_12392__$1);
return statearr_12420;
})();if(cljs.core.truth_(inst_12394))
{var statearr_12421_13136 = state_12412__$1;(statearr_12421_13136[1] = 8);
} else
{var statearr_12422_13137 = state_12412__$1;(statearr_12422_13137[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12413 === 8))
{var inst_12384 = (state_12412[7]);var inst_12391 = (state_12412[8]);var inst_12393 = (state_12412[10]);var inst_12392 = (state_12412[9]);var inst_12396 = (function (){var c = inst_12393;var v = inst_12392;var vec__12389 = inst_12391;var cs = inst_12384;return ((function (c,v,vec__12389,cs,inst_12384,inst_12391,inst_12393,inst_12392,state_val_12413,c__7538__auto___13130,out){
return (function (p1__12329_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12329_SHARP_);
});
;})(c,v,vec__12389,cs,inst_12384,inst_12391,inst_12393,inst_12392,state_val_12413,c__7538__auto___13130,out))
})();var inst_12397 = cljs.core.filterv.call(null,inst_12396,inst_12384);var inst_12384__$1 = inst_12397;var state_12412__$1 = (function (){var statearr_12423 = state_12412;(statearr_12423[7] = inst_12384__$1);
return statearr_12423;
})();var statearr_12424_13138 = state_12412__$1;(statearr_12424_13138[2] = null);
(statearr_12424_13138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12413 === 9))
{var inst_12392 = (state_12412[9]);var state_12412__$1 = state_12412;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12412__$1,11,out,inst_12392);
} else
{if((state_val_12413 === 10))
{var inst_12404 = (state_12412[2]);var state_12412__$1 = state_12412;var statearr_12426_13139 = state_12412__$1;(statearr_12426_13139[2] = inst_12404);
(statearr_12426_13139[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12413 === 11))
{var inst_12384 = (state_12412[7]);var inst_12401 = (state_12412[2]);var tmp12425 = inst_12384;var inst_12384__$1 = tmp12425;var state_12412__$1 = (function (){var statearr_12427 = state_12412;(statearr_12427[7] = inst_12384__$1);
(statearr_12427[11] = inst_12401);
return statearr_12427;
})();var statearr_12428_13140 = state_12412__$1;(statearr_12428_13140[2] = null);
(statearr_12428_13140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto___13130,out))
;return ((function (switch__7468__auto__,c__7538__auto___13130,out){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_12432 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12432[0] = state_machine__7469__auto__);
(statearr_12432[1] = 1);
return statearr_12432;
});
var state_machine__7469__auto____1 = (function (state_12412){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_12412);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e12433){if((e12433 instanceof Object))
{var ex__7472__auto__ = e12433;var statearr_12434_13141 = state_12412;(statearr_12434_13141[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12412);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13142 = state_12412;
state_12412 = G__13142;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_12412){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_12412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto___13130,out))
})();var state__7540__auto__ = (function (){var statearr_12435 = f__7539__auto__.call(null);(statearr_12435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto___13130);
return statearr_12435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto___13130,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7538__auto___13143 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto___13143,out){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto___13143,out){
return (function (state_12505){var state_val_12506 = (state_12505[1]);if((state_val_12506 === 1))
{var inst_12482 = 0;var state_12505__$1 = (function (){var statearr_12507 = state_12505;(statearr_12507[7] = inst_12482);
return statearr_12507;
})();var statearr_12508_13144 = state_12505__$1;(statearr_12508_13144[2] = null);
(statearr_12508_13144[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 2))
{var inst_12482 = (state_12505[7]);var inst_12484 = (inst_12482 < n);var state_12505__$1 = state_12505;if(cljs.core.truth_(inst_12484))
{var statearr_12509_13145 = state_12505__$1;(statearr_12509_13145[1] = 4);
} else
{var statearr_12510_13146 = state_12505__$1;(statearr_12510_13146[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 3))
{var inst_12502 = (state_12505[2]);var inst_12503 = cljs.core.async.close_BANG_.call(null,out);var state_12505__$1 = (function (){var statearr_12511 = state_12505;(statearr_12511[8] = inst_12502);
return statearr_12511;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12505__$1,inst_12503);
} else
{if((state_val_12506 === 4))
{var state_12505__$1 = state_12505;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12505__$1,7,ch);
} else
{if((state_val_12506 === 5))
{var state_12505__$1 = state_12505;var statearr_12512_13147 = state_12505__$1;(statearr_12512_13147[2] = null);
(statearr_12512_13147[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 6))
{var inst_12500 = (state_12505[2]);var state_12505__$1 = state_12505;var statearr_12513_13148 = state_12505__$1;(statearr_12513_13148[2] = inst_12500);
(statearr_12513_13148[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 7))
{var inst_12487 = (state_12505[9]);var inst_12487__$1 = (state_12505[2]);var inst_12488 = (inst_12487__$1 == null);var inst_12489 = cljs.core.not.call(null,inst_12488);var state_12505__$1 = (function (){var statearr_12514 = state_12505;(statearr_12514[9] = inst_12487__$1);
return statearr_12514;
})();if(inst_12489)
{var statearr_12515_13149 = state_12505__$1;(statearr_12515_13149[1] = 8);
} else
{var statearr_12516_13150 = state_12505__$1;(statearr_12516_13150[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 8))
{var inst_12487 = (state_12505[9]);var state_12505__$1 = state_12505;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12505__$1,11,out,inst_12487);
} else
{if((state_val_12506 === 9))
{var state_12505__$1 = state_12505;var statearr_12517_13151 = state_12505__$1;(statearr_12517_13151[2] = null);
(statearr_12517_13151[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 10))
{var inst_12497 = (state_12505[2]);var state_12505__$1 = state_12505;var statearr_12518_13152 = state_12505__$1;(statearr_12518_13152[2] = inst_12497);
(statearr_12518_13152[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 11))
{var inst_12482 = (state_12505[7]);var inst_12492 = (state_12505[2]);var inst_12493 = (inst_12482 + 1);var inst_12482__$1 = inst_12493;var state_12505__$1 = (function (){var statearr_12519 = state_12505;(statearr_12519[7] = inst_12482__$1);
(statearr_12519[10] = inst_12492);
return statearr_12519;
})();var statearr_12520_13153 = state_12505__$1;(statearr_12520_13153[2] = null);
(statearr_12520_13153[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto___13143,out))
;return ((function (switch__7468__auto__,c__7538__auto___13143,out){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_12524 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12524[0] = state_machine__7469__auto__);
(statearr_12524[1] = 1);
return statearr_12524;
});
var state_machine__7469__auto____1 = (function (state_12505){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_12505);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e12525){if((e12525 instanceof Object))
{var ex__7472__auto__ = e12525;var statearr_12526_13154 = state_12505;(statearr_12526_13154[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12505);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13155 = state_12505;
state_12505 = G__13155;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_12505){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_12505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto___13143,out))
})();var state__7540__auto__ = (function (){var statearr_12527 = f__7539__auto__.call(null);(statearr_12527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto___13143);
return statearr_12527;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto___13143,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7538__auto___13156 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto___13156,out){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto___13156,out){
return (function (state_12599){var state_val_12600 = (state_12599[1]);if((state_val_12600 === 1))
{var inst_12576 = null;var state_12599__$1 = (function (){var statearr_12601 = state_12599;(statearr_12601[7] = inst_12576);
return statearr_12601;
})();var statearr_12602_13157 = state_12599__$1;(statearr_12602_13157[2] = null);
(statearr_12602_13157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12600 === 2))
{var state_12599__$1 = state_12599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12599__$1,4,ch);
} else
{if((state_val_12600 === 3))
{var inst_12596 = (state_12599[2]);var inst_12597 = cljs.core.async.close_BANG_.call(null,out);var state_12599__$1 = (function (){var statearr_12603 = state_12599;(statearr_12603[8] = inst_12596);
return statearr_12603;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12599__$1,inst_12597);
} else
{if((state_val_12600 === 4))
{var inst_12579 = (state_12599[9]);var inst_12579__$1 = (state_12599[2]);var inst_12580 = (inst_12579__$1 == null);var inst_12581 = cljs.core.not.call(null,inst_12580);var state_12599__$1 = (function (){var statearr_12604 = state_12599;(statearr_12604[9] = inst_12579__$1);
return statearr_12604;
})();if(inst_12581)
{var statearr_12605_13158 = state_12599__$1;(statearr_12605_13158[1] = 5);
} else
{var statearr_12606_13159 = state_12599__$1;(statearr_12606_13159[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12600 === 5))
{var inst_12579 = (state_12599[9]);var inst_12576 = (state_12599[7]);var inst_12583 = cljs.core._EQ_.call(null,inst_12579,inst_12576);var state_12599__$1 = state_12599;if(inst_12583)
{var statearr_12607_13160 = state_12599__$1;(statearr_12607_13160[1] = 8);
} else
{var statearr_12608_13161 = state_12599__$1;(statearr_12608_13161[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12600 === 6))
{var state_12599__$1 = state_12599;var statearr_12610_13162 = state_12599__$1;(statearr_12610_13162[2] = null);
(statearr_12610_13162[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12600 === 7))
{var inst_12594 = (state_12599[2]);var state_12599__$1 = state_12599;var statearr_12611_13163 = state_12599__$1;(statearr_12611_13163[2] = inst_12594);
(statearr_12611_13163[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12600 === 8))
{var inst_12576 = (state_12599[7]);var tmp12609 = inst_12576;var inst_12576__$1 = tmp12609;var state_12599__$1 = (function (){var statearr_12612 = state_12599;(statearr_12612[7] = inst_12576__$1);
return statearr_12612;
})();var statearr_12613_13164 = state_12599__$1;(statearr_12613_13164[2] = null);
(statearr_12613_13164[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12600 === 9))
{var inst_12579 = (state_12599[9]);var state_12599__$1 = state_12599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12599__$1,11,out,inst_12579);
} else
{if((state_val_12600 === 10))
{var inst_12591 = (state_12599[2]);var state_12599__$1 = state_12599;var statearr_12614_13165 = state_12599__$1;(statearr_12614_13165[2] = inst_12591);
(statearr_12614_13165[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12600 === 11))
{var inst_12579 = (state_12599[9]);var inst_12588 = (state_12599[2]);var inst_12576 = inst_12579;var state_12599__$1 = (function (){var statearr_12615 = state_12599;(statearr_12615[10] = inst_12588);
(statearr_12615[7] = inst_12576);
return statearr_12615;
})();var statearr_12616_13166 = state_12599__$1;(statearr_12616_13166[2] = null);
(statearr_12616_13166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto___13156,out))
;return ((function (switch__7468__auto__,c__7538__auto___13156,out){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_12620 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12620[0] = state_machine__7469__auto__);
(statearr_12620[1] = 1);
return statearr_12620;
});
var state_machine__7469__auto____1 = (function (state_12599){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_12599);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e12621){if((e12621 instanceof Object))
{var ex__7472__auto__ = e12621;var statearr_12622_13167 = state_12599;(statearr_12622_13167[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12599);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13168 = state_12599;
state_12599 = G__13168;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_12599){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_12599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto___13156,out))
})();var state__7540__auto__ = (function (){var statearr_12623 = f__7539__auto__.call(null);(statearr_12623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto___13156);
return statearr_12623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto___13156,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7538__auto___13169 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto___13169,out){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto___13169,out){
return (function (state_12728){var state_val_12729 = (state_12728[1]);if((state_val_12729 === 1))
{var inst_12691 = (new Array(n));var inst_12692 = inst_12691;var inst_12693 = 0;var state_12728__$1 = (function (){var statearr_12730 = state_12728;(statearr_12730[7] = inst_12693);
(statearr_12730[8] = inst_12692);
return statearr_12730;
})();var statearr_12731_13170 = state_12728__$1;(statearr_12731_13170[2] = null);
(statearr_12731_13170[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12729 === 2))
{var state_12728__$1 = state_12728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12728__$1,4,ch);
} else
{if((state_val_12729 === 3))
{var inst_12726 = (state_12728[2]);var state_12728__$1 = state_12728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12728__$1,inst_12726);
} else
{if((state_val_12729 === 4))
{var inst_12696 = (state_12728[9]);var inst_12696__$1 = (state_12728[2]);var inst_12697 = (inst_12696__$1 == null);var inst_12698 = cljs.core.not.call(null,inst_12697);var state_12728__$1 = (function (){var statearr_12732 = state_12728;(statearr_12732[9] = inst_12696__$1);
return statearr_12732;
})();if(inst_12698)
{var statearr_12733_13171 = state_12728__$1;(statearr_12733_13171[1] = 5);
} else
{var statearr_12734_13172 = state_12728__$1;(statearr_12734_13172[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12729 === 5))
{var inst_12701 = (state_12728[10]);var inst_12696 = (state_12728[9]);var inst_12693 = (state_12728[7]);var inst_12692 = (state_12728[8]);var inst_12700 = (inst_12692[inst_12693] = inst_12696);var inst_12701__$1 = (inst_12693 + 1);var inst_12702 = (inst_12701__$1 < n);var state_12728__$1 = (function (){var statearr_12735 = state_12728;(statearr_12735[11] = inst_12700);
(statearr_12735[10] = inst_12701__$1);
return statearr_12735;
})();if(cljs.core.truth_(inst_12702))
{var statearr_12736_13173 = state_12728__$1;(statearr_12736_13173[1] = 8);
} else
{var statearr_12737_13174 = state_12728__$1;(statearr_12737_13174[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12729 === 6))
{var inst_12693 = (state_12728[7]);var inst_12714 = (inst_12693 > 0);var state_12728__$1 = state_12728;if(cljs.core.truth_(inst_12714))
{var statearr_12739_13175 = state_12728__$1;(statearr_12739_13175[1] = 12);
} else
{var statearr_12740_13176 = state_12728__$1;(statearr_12740_13176[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12729 === 7))
{var inst_12724 = (state_12728[2]);var state_12728__$1 = state_12728;var statearr_12741_13177 = state_12728__$1;(statearr_12741_13177[2] = inst_12724);
(statearr_12741_13177[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12729 === 8))
{var inst_12701 = (state_12728[10]);var inst_12692 = (state_12728[8]);var tmp12738 = inst_12692;var inst_12692__$1 = tmp12738;var inst_12693 = inst_12701;var state_12728__$1 = (function (){var statearr_12742 = state_12728;(statearr_12742[7] = inst_12693);
(statearr_12742[8] = inst_12692__$1);
return statearr_12742;
})();var statearr_12743_13178 = state_12728__$1;(statearr_12743_13178[2] = null);
(statearr_12743_13178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12729 === 9))
{var inst_12692 = (state_12728[8]);var inst_12706 = cljs.core.vec.call(null,inst_12692);var state_12728__$1 = state_12728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12728__$1,11,out,inst_12706);
} else
{if((state_val_12729 === 10))
{var inst_12712 = (state_12728[2]);var state_12728__$1 = state_12728;var statearr_12744_13179 = state_12728__$1;(statearr_12744_13179[2] = inst_12712);
(statearr_12744_13179[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12729 === 11))
{var inst_12708 = (state_12728[2]);var inst_12709 = (new Array(n));var inst_12692 = inst_12709;var inst_12693 = 0;var state_12728__$1 = (function (){var statearr_12745 = state_12728;(statearr_12745[7] = inst_12693);
(statearr_12745[8] = inst_12692);
(statearr_12745[12] = inst_12708);
return statearr_12745;
})();var statearr_12746_13180 = state_12728__$1;(statearr_12746_13180[2] = null);
(statearr_12746_13180[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12729 === 12))
{var inst_12692 = (state_12728[8]);var inst_12716 = cljs.core.vec.call(null,inst_12692);var state_12728__$1 = state_12728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12728__$1,15,out,inst_12716);
} else
{if((state_val_12729 === 13))
{var state_12728__$1 = state_12728;var statearr_12747_13181 = state_12728__$1;(statearr_12747_13181[2] = null);
(statearr_12747_13181[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12729 === 14))
{var inst_12721 = (state_12728[2]);var inst_12722 = cljs.core.async.close_BANG_.call(null,out);var state_12728__$1 = (function (){var statearr_12748 = state_12728;(statearr_12748[13] = inst_12721);
return statearr_12748;
})();var statearr_12749_13182 = state_12728__$1;(statearr_12749_13182[2] = inst_12722);
(statearr_12749_13182[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12729 === 15))
{var inst_12718 = (state_12728[2]);var state_12728__$1 = state_12728;var statearr_12750_13183 = state_12728__$1;(statearr_12750_13183[2] = inst_12718);
(statearr_12750_13183[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto___13169,out))
;return ((function (switch__7468__auto__,c__7538__auto___13169,out){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_12754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12754[0] = state_machine__7469__auto__);
(statearr_12754[1] = 1);
return statearr_12754;
});
var state_machine__7469__auto____1 = (function (state_12728){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_12728);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e12755){if((e12755 instanceof Object))
{var ex__7472__auto__ = e12755;var statearr_12756_13184 = state_12728;(statearr_12756_13184[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12728);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13185 = state_12728;
state_12728 = G__13185;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_12728){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_12728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto___13169,out))
})();var state__7540__auto__ = (function (){var statearr_12757 = f__7539__auto__.call(null);(statearr_12757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto___13169);
return statearr_12757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto___13169,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7538__auto___13186 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto___13186,out){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto___13186,out){
return (function (state_12870){var state_val_12871 = (state_12870[1]);if((state_val_12871 === 1))
{var inst_12829 = [];var inst_12830 = inst_12829;var inst_12831 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12870__$1 = (function (){var statearr_12872 = state_12870;(statearr_12872[7] = inst_12830);
(statearr_12872[8] = inst_12831);
return statearr_12872;
})();var statearr_12873_13187 = state_12870__$1;(statearr_12873_13187[2] = null);
(statearr_12873_13187[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12871 === 2))
{var state_12870__$1 = state_12870;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12870__$1,4,ch);
} else
{if((state_val_12871 === 3))
{var inst_12868 = (state_12870[2]);var state_12870__$1 = state_12870;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12870__$1,inst_12868);
} else
{if((state_val_12871 === 4))
{var inst_12834 = (state_12870[9]);var inst_12834__$1 = (state_12870[2]);var inst_12835 = (inst_12834__$1 == null);var inst_12836 = cljs.core.not.call(null,inst_12835);var state_12870__$1 = (function (){var statearr_12874 = state_12870;(statearr_12874[9] = inst_12834__$1);
return statearr_12874;
})();if(inst_12836)
{var statearr_12875_13188 = state_12870__$1;(statearr_12875_13188[1] = 5);
} else
{var statearr_12876_13189 = state_12870__$1;(statearr_12876_13189[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12871 === 5))
{var inst_12838 = (state_12870[10]);var inst_12831 = (state_12870[8]);var inst_12834 = (state_12870[9]);var inst_12838__$1 = f.call(null,inst_12834);var inst_12839 = cljs.core._EQ_.call(null,inst_12838__$1,inst_12831);var inst_12840 = cljs.core.keyword_identical_QMARK_.call(null,inst_12831,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12841 = (inst_12839) || (inst_12840);var state_12870__$1 = (function (){var statearr_12877 = state_12870;(statearr_12877[10] = inst_12838__$1);
return statearr_12877;
})();if(cljs.core.truth_(inst_12841))
{var statearr_12878_13190 = state_12870__$1;(statearr_12878_13190[1] = 8);
} else
{var statearr_12879_13191 = state_12870__$1;(statearr_12879_13191[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12871 === 6))
{var inst_12830 = (state_12870[7]);var inst_12855 = inst_12830.length;var inst_12856 = (inst_12855 > 0);var state_12870__$1 = state_12870;if(cljs.core.truth_(inst_12856))
{var statearr_12881_13192 = state_12870__$1;(statearr_12881_13192[1] = 12);
} else
{var statearr_12882_13193 = state_12870__$1;(statearr_12882_13193[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12871 === 7))
{var inst_12866 = (state_12870[2]);var state_12870__$1 = state_12870;var statearr_12883_13194 = state_12870__$1;(statearr_12883_13194[2] = inst_12866);
(statearr_12883_13194[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12871 === 8))
{var inst_12838 = (state_12870[10]);var inst_12830 = (state_12870[7]);var inst_12834 = (state_12870[9]);var inst_12843 = inst_12830.push(inst_12834);var tmp12880 = inst_12830;var inst_12830__$1 = tmp12880;var inst_12831 = inst_12838;var state_12870__$1 = (function (){var statearr_12884 = state_12870;(statearr_12884[7] = inst_12830__$1);
(statearr_12884[11] = inst_12843);
(statearr_12884[8] = inst_12831);
return statearr_12884;
})();var statearr_12885_13195 = state_12870__$1;(statearr_12885_13195[2] = null);
(statearr_12885_13195[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12871 === 9))
{var inst_12830 = (state_12870[7]);var inst_12846 = cljs.core.vec.call(null,inst_12830);var state_12870__$1 = state_12870;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12870__$1,11,out,inst_12846);
} else
{if((state_val_12871 === 10))
{var inst_12853 = (state_12870[2]);var state_12870__$1 = state_12870;var statearr_12886_13196 = state_12870__$1;(statearr_12886_13196[2] = inst_12853);
(statearr_12886_13196[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12871 === 11))
{var inst_12838 = (state_12870[10]);var inst_12834 = (state_12870[9]);var inst_12848 = (state_12870[2]);var inst_12849 = [];var inst_12850 = inst_12849.push(inst_12834);var inst_12830 = inst_12849;var inst_12831 = inst_12838;var state_12870__$1 = (function (){var statearr_12887 = state_12870;(statearr_12887[7] = inst_12830);
(statearr_12887[12] = inst_12848);
(statearr_12887[13] = inst_12850);
(statearr_12887[8] = inst_12831);
return statearr_12887;
})();var statearr_12888_13197 = state_12870__$1;(statearr_12888_13197[2] = null);
(statearr_12888_13197[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12871 === 12))
{var inst_12830 = (state_12870[7]);var inst_12858 = cljs.core.vec.call(null,inst_12830);var state_12870__$1 = state_12870;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12870__$1,15,out,inst_12858);
} else
{if((state_val_12871 === 13))
{var state_12870__$1 = state_12870;var statearr_12889_13198 = state_12870__$1;(statearr_12889_13198[2] = null);
(statearr_12889_13198[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12871 === 14))
{var inst_12863 = (state_12870[2]);var inst_12864 = cljs.core.async.close_BANG_.call(null,out);var state_12870__$1 = (function (){var statearr_12890 = state_12870;(statearr_12890[14] = inst_12863);
return statearr_12890;
})();var statearr_12891_13199 = state_12870__$1;(statearr_12891_13199[2] = inst_12864);
(statearr_12891_13199[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12871 === 15))
{var inst_12860 = (state_12870[2]);var state_12870__$1 = state_12870;var statearr_12892_13200 = state_12870__$1;(statearr_12892_13200[2] = inst_12860);
(statearr_12892_13200[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto___13186,out))
;return ((function (switch__7468__auto__,c__7538__auto___13186,out){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_12896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12896[0] = state_machine__7469__auto__);
(statearr_12896[1] = 1);
return statearr_12896;
});
var state_machine__7469__auto____1 = (function (state_12870){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_12870);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e12897){if((e12897 instanceof Object))
{var ex__7472__auto__ = e12897;var statearr_12898_13201 = state_12870;(statearr_12898_13201[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12870);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12897;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13202 = state_12870;
state_12870 = G__13202;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_12870){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_12870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto___13186,out))
})();var state__7540__auto__ = (function (){var statearr_12899 = f__7539__auto__.call(null);(statearr_12899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto___13186);
return statearr_12899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto___13186,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.autocompleter.core')) {
goog.provide('lt.plugins.autocompleter.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('lt.util.js');
goog.require('lt.util.js');
goog.require('lt.util.dom');
goog.require('cljs.core.async');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.autocompleter.core.curr_time = (function curr_time(){return (new Date()).getTime();
});
lt.plugins.autocompleter.core.elapsed = (function elapsed(start){return [cljs.core.str((lt.plugins.autocompleter.core.curr_time.call(null) - start)),cljs.core.str(" ms")].join('');
});
lt.plugins.autocompleter.core.default_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"completeSingle","completeSingle",2100037203),false,new cljs.core.Keyword(null,"supportsSelection","supportsSelection",3475218138),true,new cljs.core.Keyword(null,"closeOnUnfocus","closeOnUnfocus",2215570266),true,new cljs.core.Keyword(null,"customKeys","customKeys",3726901367),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Up","Up",1013906989),(function (p1__13367_SHARP_,p2__13366_SHARP_){return p2__13366_SHARP_.moveFocus.call(null,-1);
}),new cljs.core.Keyword(null,"Down","Down",1016040500),(function (p1__13369_SHARP_,p2__13368_SHARP_){return p2__13368_SHARP_.moveFocus.call(null,1);
}),new cljs.core.Keyword(null,"Enter","Enter",1081018922),(function (p1__13371_SHARP_,p2__13370_SHARP_){return p2__13370_SHARP_.pick.call(null);
}),new cljs.core.Keyword(null,"Tab","Tab",1013988071),(function (a,b){return b.pick.call(null);
}),new cljs.core.Keyword(null,"Esc","Esc",1013974215),(function (p1__13373_SHARP_,p2__13372_SHARP_){return p2__13372_SHARP_.close.call(null);
})], null)], null);
lt.plugins.autocompleter.core.distinct_completions = (function distinct_completions(hints){var seen = {};return cljs.core.filter.call(null,((function (seen){
return (function (hint){if((seen[new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(hint)]) === true)
{return false;
} else
{return (seen[new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(hint)] = true);
}
});})(seen))
,hints);
});
/**
* Prepare found hints for display through CM showHint
*/
lt.plugins.autocompleter.core.process_hint_results = (function process_hint_results(hints){if(cljs.core.seq.call(null,hints))
{return cljs.core.clj__GT_js.call(null,(function (p1__13375_SHARP_){var fst = cljs.core.first.call(null,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(p1__13375_SHARP_));return cljs.core.assoc.call(null,p1__13375_SHARP_,new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(fst),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(fst));
}).call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"list","list",1017226256)],[cljs.core.take.call(null,25,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"text","text",1017460895),lt.plugins.autocompleter.core.distinct_completions.call(null,cljs.core.filter.call(null,(function (p1__13374_SHARP_){return (new cljs.core.Keyword(null,"displayText","displayText",2728236161).cljs$core$IFn$_invoke$arity$1(p1__13374_SHARP_).length < 1000);
}),hints))))])));
} else
{return null;
}
});
/**
* Listen for hint results from all given channels
* Will raise a behavior to show results when all channels have delivered a result
* or alternatively the specified timeout has elapsed
*/
lt.plugins.autocompleter.core.listen_for_hint_results = (function listen_for_hint_results(ed,channels,hinter_ch){var t = cljs.core.async.timeout.call(null,500);var c__7538__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto__,t){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto__,t){
return (function (state_13461){var state_val_13462 = (state_13461[1]);if((state_val_13462 === 1))
{var inst_13430 = cljs.core.conj.call(null,channels,t);var inst_13431 = cljs.core.PersistentVector.EMPTY;var inst_13432 = inst_13430;var state_13461__$1 = (function (){var statearr_13463 = state_13461;(statearr_13463[7] = inst_13431);
(statearr_13463[8] = inst_13432);
return statearr_13463;
})();var statearr_13464_13513 = state_13461__$1;(statearr_13464_13513[2] = null);
(statearr_13464_13513[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 2))
{var inst_13432 = (state_13461[8]);var inst_13434 = cljs.core.count.call(null,inst_13432);var inst_13435 = cljs.core._EQ_.call(null,1,inst_13434);var state_13461__$1 = state_13461;if(inst_13435)
{var statearr_13465_13514 = state_13461__$1;(statearr_13465_13514[1] = 4);
} else
{var statearr_13466_13515 = state_13461__$1;(statearr_13466_13515[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 3))
{var inst_13459 = (state_13461[2]);var state_13461__$1 = state_13461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13461__$1,inst_13459);
} else
{if((state_val_13462 === 4))
{var inst_13431 = (state_13461[7]);var inst_13437 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_13431);var state_13461__$1 = state_13461;var statearr_13467_13516 = state_13461__$1;(statearr_13467_13516[2] = inst_13437);
(statearr_13467_13516[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 5))
{var inst_13432 = (state_13461[8]);var state_13461__$1 = state_13461;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13461__$1,7,inst_13432);
} else
{if((state_val_13462 === 6))
{var inst_13457 = (state_13461[2]);var state_13461__$1 = state_13461;var statearr_13468_13517 = state_13461__$1;(statearr_13468_13517[2] = inst_13457);
(statearr_13468_13517[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 7))
{var inst_13443 = (state_13461[9]);var inst_13441 = (state_13461[2]);var inst_13442 = cljs.core.nth.call(null,inst_13441,0,null);var inst_13443__$1 = cljs.core.nth.call(null,inst_13441,1,null);var inst_13444 = (inst_13443__$1 === t);var state_13461__$1 = (function (){var statearr_13469 = state_13461;(statearr_13469[9] = inst_13443__$1);
(statearr_13469[10] = inst_13442);
return statearr_13469;
})();if(cljs.core.truth_(inst_13444))
{var statearr_13470_13518 = state_13461__$1;(statearr_13470_13518[1] = 8);
} else
{var statearr_13471_13519 = state_13461__$1;(statearr_13471_13519[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 8))
{var inst_13431 = (state_13461[7]);var inst_13446 = cljs.core.println.call(null,"WARNING: Timeout waiting for hinter provider channel results");var inst_13447 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_13431);var state_13461__$1 = (function (){var statearr_13472 = state_13461;(statearr_13472[11] = inst_13446);
return statearr_13472;
})();var statearr_13473_13520 = state_13461__$1;(statearr_13473_13520[2] = inst_13447);
(statearr_13473_13520[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 9))
{var inst_13431 = (state_13461[7]);var inst_13443 = (state_13461[9]);var inst_13442 = (state_13461[10]);var inst_13432 = (state_13461[8]);var inst_13449 = cljs.core.into.call(null,inst_13431,inst_13442);var inst_13450 = [inst_13443];var inst_13451 = cljs.core.PersistentHashSet.fromArray.call(null,inst_13450,true);var inst_13452 = cljs.core.remove.call(null,inst_13451,inst_13432);var inst_13431__$1 = inst_13449;var inst_13432__$1 = inst_13452;var state_13461__$1 = (function (){var statearr_13474 = state_13461;(statearr_13474[7] = inst_13431__$1);
(statearr_13474[8] = inst_13432__$1);
return statearr_13474;
})();var statearr_13475_13521 = state_13461__$1;(statearr_13475_13521[2] = null);
(statearr_13475_13521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 10))
{var inst_13455 = (state_13461[2]);var state_13461__$1 = state_13461;var statearr_13476_13522 = state_13461__$1;(statearr_13476_13522[2] = inst_13455);
(statearr_13476_13522[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7538__auto__,t))
;return ((function (switch__7468__auto__,c__7538__auto__,t){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_13480 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13480[0] = state_machine__7469__auto__);
(statearr_13480[1] = 1);
return statearr_13480;
});
var state_machine__7469__auto____1 = (function (state_13461){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_13461);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e13481){if((e13481 instanceof Object))
{var ex__7472__auto__ = e13481;var statearr_13482_13523 = state_13461;(statearr_13482_13523[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13481;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13524 = state_13461;
state_13461 = G__13524;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_13461){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_13461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto__,t))
})();var state__7540__auto__ = (function (){var statearr_13483 = f__7539__auto__.call(null);(statearr_13483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto__);
return statearr_13483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto__,t))
);
return c__7538__auto__;
});
lt.plugins.autocompleter.core.pos_obj__GT_pos = (function pos_obj__GT_pos(p){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),p.ch,new cljs.core.Keyword(null,"line","line",1017226086),p.line], null);
});
lt.plugins.autocompleter.core.from_cm_hints = (function from_cm_hints(res_obj){if(cljs.core.truth_(res_obj))
{var res = cljs.core.js__GT_clj.call(null,res_obj,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var from = lt.plugins.autocompleter.core.pos_obj__GT_pos.call(null,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(res));var to = lt.plugins.autocompleter.core.pos_obj__GT_pos.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(res));var sym = lt.objs.editor.range.call(null,lt.objs.editor.pool.last_active.call(null),from,to);if(cljs.core.seq.call(null,sym.trim()))
{return cljs.core.map.call(null,((function (res,from,to,sym){
return (function (p1__13484_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[p1__13484_SHARP_,p1__13484_SHARP_,((function (res,from,to,sym){
return (function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": sym}));
});})(res,from,to,sym))
,from,to]);
});})(res,from,to,sym))
,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(res));
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.autocompleter.core.get_token = (function get_token(ed){return lt.objs.editor.__GT_token.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
});
lt.plugins.autocompleter.core.should_hint_QMARK_ = (function should_hint_QMARK_(ed){return cljs.core.seq.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.autocompleter.core.get_token.call(null,ed)).trim());
});
lt.plugins.autocompleter.core.completion_active_QMARK_ = (function completion_active_QMARK_(ed){return lt.objs.editor.__GT_cm_ed.call(null,ed).state.completionActive;
});
lt.plugins.autocompleter.core.maybe_close_hinter = (function maybe_close_hinter(ed){var temp__4092__auto__ = lt.plugins.autocompleter.core.completion_active_QMARK_.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var state = temp__4092__auto__;return state.close();
} else
{return null;
}
});
lt.plugins.autocompleter.core.cm_hinter = (function cm_hinter(ed,channels,hinter_fn){if(lt.plugins.autocompleter.core.should_hint_QMARK_.call(null,ed))
{var ch = cljs.core.async.chan.call(null);var hints = lt.plugins.autocompleter.core.from_cm_hints.call(null,hinter_fn.call(null,lt.objs.editor.__GT_cm_ed.call(null,ed)));if(cljs.core.seq.call(null,hints))
{cljs.core.async.put_BANG_.call(null,ch,hints);
return cljs.core.conj.call(null,channels,ch);
} else
{return channels;
}
} else
{return channels;
}
});
lt.plugins.autocompleter.core.__BEH__javascript_hints = (function __BEH__javascript_hints(ed,channels){return lt.plugins.autocompleter.core.cm_hinter.call(null,ed,channels,(function (cm_ed){return CodeMirror.hint.javascript(cm_ed);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.core","javascript-hints","lt.plugins.autocompleter.core/javascript-hints",1809003230),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.core.__BEH__javascript_hints,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: JavaScript Hints",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),null], null), null));
lt.plugins.autocompleter.core.__BEH__anyword_hints = (function __BEH__anyword_hints(ed,channels){return lt.plugins.autocompleter.core.cm_hinter.call(null,ed,channels,(function (cm_ed){return CodeMirror.hint.anyword(cm_ed);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.core","anyword-hints","lt.plugins.autocompleter.core/anyword-hints",1169070757),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.core.__BEH__anyword_hints,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Anyword Hints",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),null], null), null));
lt.plugins.autocompleter.core.on_line_change = (function on_line_change(line,ch){var ed = lt.objs.editor.pool.last_active.call(null);if(cljs.core.not.call(null,lt.plugins.autocompleter.core.completion_active_QMARK_.call(null,ed)))
{return CodeMirror.off(line,"change",on_line_change);
} else
{if(cljs.core._EQ_.call(null,"+delete",ch.origin))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"start-hinting","start-hinting",3115741442));
} else
{return null;
}
}
});
/**
* Creates a channel for writing results that are to be popped up with the hinter ui
* Displays hint results async by calling the showHint plugin callback when
* results are received on the channel
*/
lt.plugins.autocompleter.core.init_show_hint_ch = (function init_show_hint_ch(ed){var ch = cljs.core.async.chan.call(null);CodeMirror.showHint(lt.objs.editor.__GT_cm_ed.call(null,ed),((function (ch){
return (function (_,cb){var c__7538__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto__,ch){
return (function (){var f__7539__auto__ = (function (){var switch__7468__auto__ = ((function (c__7538__auto__,ch){
return (function (state_13504){var state_val_13505 = (state_13504[1]);if((state_val_13505 === 2))
{var inst_13500 = (state_13504[2]);var inst_13501 = lt.plugins.autocompleter.core.process_hint_results.call(null,inst_13500);var inst_13502 = cb.call(null,inst_13501);var state_13504__$1 = state_13504;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13504__$1,inst_13502);
} else
{if((state_val_13505 === 1))
{var state_13504__$1 = state_13504;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13504__$1,2,ch);
} else
{return null;
}
}
});})(c__7538__auto__,ch))
;return ((function (switch__7468__auto__,c__7538__auto__,ch){
return (function() {
var state_machine__7469__auto__ = null;
var state_machine__7469__auto____0 = (function (){var statearr_13509 = [null,null,null,null,null,null,null];(statearr_13509[0] = state_machine__7469__auto__);
(statearr_13509[1] = 1);
return statearr_13509;
});
var state_machine__7469__auto____1 = (function (state_13504){while(true){
var ret_value__7470__auto__ = (function (){try{while(true){
var result__7471__auto__ = switch__7468__auto__.call(null,state_13504);if(cljs.core.keyword_identical_QMARK_.call(null,result__7471__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7471__auto__;
}
break;
}
}catch (e13510){if((e13510 instanceof Object))
{var ex__7472__auto__ = e13510;var statearr_13511_13525 = state_13504;(statearr_13511_13525[5] = ex__7472__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13504);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13510;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13526 = state_13504;
state_13504 = G__13526;
continue;
}
} else
{return ret_value__7470__auto__;
}
break;
}
});
state_machine__7469__auto__ = function(state_13504){
switch(arguments.length){
case 0:
return state_machine__7469__auto____0.call(this);
case 1:
return state_machine__7469__auto____1.call(this,state_13504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7469__auto____0;
state_machine__7469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7469__auto____1;
return state_machine__7469__auto__;
})()
;})(switch__7468__auto__,c__7538__auto__,ch))
})();var state__7540__auto__ = (function (){var statearr_13512 = f__7539__auto__.call(null);(statearr_13512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto__);
return statearr_13512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto__,ch))
);
return c__7538__auto__;
});})(ch))
,cljs.core.clj__GT_js.call(null,lt.plugins.autocompleter.core.default_options));
return ch;
});
lt.plugins.autocompleter.core.__BEH__start_hinting = (function __BEH__start_hinting(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var line_handle = lt.objs.editor.line_handle.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos));var chs = lt.object.raise_reduce.call(null,ed,new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),cljs.core.PersistentVector.EMPTY);CodeMirror.off(line_handle,"change",lt.plugins.autocompleter.core.on_line_change);
if(cljs.core.seq.call(null,chs))
{lt.plugins.autocompleter.core.listen_for_hint_results.call(null,ed,chs,lt.plugins.autocompleter.core.init_show_hint_ch.call(null,ed));
return CodeMirror.on(line_handle,"change",lt.plugins.autocompleter.core.on_line_change);
} else
{return lt.plugins.autocompleter.core.maybe_close_hinter.call(null,ed);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.core","start-hinting","lt.plugins.autocompleter.core/start-hinting",2636185018),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.core.__BEH__start_hinting,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Start hinting",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-hinting","start-hinting",3115741442),null], null), null));
lt.plugins.autocompleter.core.__BEH__auto_show_on_input = (function __BEH__auto_show_on_input(ed,_,ch){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"start-hinting","start-hinting",3115741442));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.core","auto-show-on-input","lt.plugins.autocompleter.core/auto-show-on-input",3736321980),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.core.__BEH__auto_show_on_input,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Show on change",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",1114262332),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.autocompleter.async-dummy')) {
goog.provide('lt.plugins.autocompleter.async_dummy');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('lt.util.js');
goog.require('lt.plugins.autocompleter.core');
goog.require('lt.util.js');
goog.require('lt.util.dom');
goog.require('cljs.core.async');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.autocompleter.core');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.autocompleter.async_dummy.chan_id = (function chan_id(ch){return (lt.plugins.autocompleter.core.curr_time.call(null) + cljs.core.hash.call(null,ch));
});
lt.plugins.autocompleter.async_dummy.store_ch = (function store_ch(ed,ch){var chs = (function (){var or__4891__auto__ = new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(or__4891__auto__))
{return or__4891__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var ch_id = lt.plugins.autocompleter.async_dummy.chan_id.call(null,ch);lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168)], null),cljs.core.assoc.call(null,chs,ch_id,ch));
return ch_id;
});
lt.plugins.autocompleter.async_dummy.get_ch = (function get_ch(ed,ch_id){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168),ch_id], null));
});
lt.plugins.autocompleter.async_dummy.remove_ch = (function remove_ch(ed,ch_id){var chs = (function (){var or__4891__auto__ = new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(or__4891__auto__))
{return or__4891__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168)], null),cljs.core.dissoc.call(null,chs,ch_id));
});
lt.plugins.autocompleter.async_dummy.background_worker = lt.objs.thread.thread_STAR_.call(null,(function tfun13551(){var orig__9935__auto__ = argsArray(arguments);var msg__9936__auto__ = orig__9935__auto__.shift();var args__9937__auto__ = orig__9935__auto__.map(cljs.reader.read_string);var raise = ((function (orig__9935__auto__,msg__9936__auto__,args__9937__auto__){
return (function (obj__9938__auto__,k__9939__auto__,v__9940__auto__){return _send(obj__9938__auto__,k__9939__auto__,cljs.core.pr_str.call(null,v__9940__auto__),"clj");
});})(orig__9935__auto__,msg__9936__auto__,args__9937__auto__))
;args__9937__auto__.unshift(msg__9936__auto__.obj);
return ((function (orig__9935__auto__,msg__9936__auto__,args__9937__auto__,raise){
return (function (obj_id,token,ch_id){return setTimeout(((function (orig__9935__auto__,msg__9936__auto__,args__9937__auto__,raise){
return (function (){var all_hints = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["map","map-indexed","map-reduce","max","min","juxt","java","just"], null);var starts_with = ((function (all_hints,orig__9935__auto__,msg__9936__auto__,args__9937__auto__,raise){
return (function (p1__13548_SHARP_,p2__13549_SHARP_){return cljs.core._EQ_.call(null,0,p1__13548_SHARP_.indexOf(p2__13549_SHARP_));
});})(all_hints,orig__9935__auto__,msg__9936__auto__,args__9937__auto__,raise))
;var sym = new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token);return _send(obj_id,new cljs.core.Keyword(null,"async-hint-results","async-hint-results",1351910867),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sym","sym",1014018617),sym,new cljs.core.Keyword(null,"chid","chid",1016956850),ch_id,new cljs.core.Keyword(null,"list","list",1017226256),cljs.core.filter.call(null,((function (all_hints,starts_with,sym,orig__9935__auto__,msg__9936__auto__,args__9937__auto__,raise){
return (function (p1__13550_SHARP_){return starts_with.call(null,p1__13550_SHARP_,sym);
});})(all_hints,starts_with,sym,orig__9935__auto__,msg__9936__auto__,args__9937__auto__,raise))
,all_hints),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null)], null)));
});})(orig__9935__auto__,msg__9936__auto__,args__9937__auto__,raise))
,(100 + cljs.core.rand_int.call(null,10)));
});})(orig__9935__auto__,msg__9936__auto__,args__9937__auto__,raise))
.apply(null,args__9937__auto__);
}));
lt.plugins.autocompleter.async_dummy.__GT_hints = (function __GT_hints(ed,res_obj){var map__13554 = cljs.core.js__GT_clj.call(null,res_obj,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var map__13554__$1 = ((cljs.core.seq_QMARK_.call(null,map__13554))?cljs.core.apply.call(null,cljs.core.hash_map,map__13554):map__13554);var res = map__13554__$1;var to = cljs.core.get.call(null,map__13554__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__13554__$1,new cljs.core.Keyword(null,"from","from",1017056028));var sym = cljs.core.get.call(null,map__13554__$1,new cljs.core.Keyword(null,"sym","sym",1014018617));var token = lt.plugins.autocompleter.core.get_token.call(null,ed);return cljs.core.map.call(null,((function (map__13554,map__13554__$1,res,to,from,sym,token){
return (function (p1__13552_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[p1__13552_SHARP_,p1__13552_SHARP_,((function (map__13554,map__13554__$1,res,to,from,sym,token){
return (function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": sym}));
});})(map__13554,map__13554__$1,res,to,from,sym,token))
,from,to]);
});})(map__13554,map__13554__$1,res,to,from,sym,token))
,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(res));
});
lt.plugins.autocompleter.async_dummy.__BEH__async_hint_results = (function __BEH__async_hint_results(ed,res){var hints = lt.plugins.autocompleter.async_dummy.__GT_hints.call(null,ed,res);var temp__4092__auto__ = lt.plugins.autocompleter.async_dummy.get_ch.call(null,ed,res.chid);if(cljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-dummy-cached-hints","async-dummy-cached-hints",2060586441)], null),hints);
lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-dummy-cached-token","async-dummy-cached-token",2071844086)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",1123661780),res.from.ch,new cljs.core.Keyword(null,"end","end",1014004813),res.to.ch,new cljs.core.Keyword(null,"line","line",1017226086),res.from.line,new cljs.core.Keyword(null,"string","string",4416885635),res.sym], null));
cljs.core.async.put_BANG_.call(null,ch,hints);
return lt.plugins.autocompleter.async_dummy.remove_ch.call(null,ed,res.chid);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.async-dummy","async-hint-results","lt.plugins.autocompleter.async-dummy/async-hint-results",3853075167),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.async_dummy.__BEH__async_hint_results,new cljs.core.Keyword(null,"desc","desc",1016984067),"Async dummy: Hint results",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-hint-results","async-hint-results",1351910867),null], null), null));
lt.plugins.autocompleter.async_dummy.maybe_cached_hints = (function maybe_cached_hints(token,cached_token,cached_hints){var starts_with = (function (p1__13555_SHARP_,p2__13556_SHARP_){var and__4879__auto__ = p1__13555_SHARP_;if(cljs.core.truth_(and__4879__auto__))
{var and__4879__auto____$1 = p2__13556_SHARP_;if(cljs.core.truth_(and__4879__auto____$1))
{return cljs.core._EQ_.call(null,0,p1__13555_SHARP_.indexOf(p2__13556_SHARP_));
} else
{return and__4879__auto____$1;
}
} else
{return and__4879__auto__;
}
});if(cljs.core.truth_((function (){var and__4879__auto__ = cached_token;if(cljs.core.truth_(and__4879__auto__))
{var and__4879__auto____$1 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(cached_token));if(and__4879__auto____$1)
{var and__4879__auto____$2 = cljs.core.seq.call(null,cached_hints);if(and__4879__auto____$2)
{var and__4879__auto____$3 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cached_token));if(and__4879__auto____$3)
{var and__4879__auto____$4 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(cached_token));if(and__4879__auto____$4)
{return starts_with.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(cached_token));
} else
{return and__4879__auto____$4;
}
} else
{return and__4879__auto____$3;
}
} else
{return and__4879__auto____$2;
}
} else
{return and__4879__auto____$1;
}
} else
{return and__4879__auto__;
}
})()))
{return cljs.core.map.call(null,((function (starts_with){
return (function (p1__13558_SHARP_){return cljs.core.assoc_in.call(null,p1__13558_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"ch","ch",1013907415)], null),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token));
});})(starts_with))
,cljs.core.filter.call(null,((function (starts_with){
return (function (p1__13557_SHARP_){return starts_with.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__13557_SHARP_),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token));
});})(starts_with))
,cached_hints));
} else
{return null;
}
});
lt.plugins.autocompleter.async_dummy.__BEH__async_hints = (function __BEH__async_hints(ed,channels){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var token = cljs.core.assoc.call(null,lt.plugins.autocompleter.core.get_token.call(null,ed),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos));var cached_token = new cljs.core.Keyword(null,"async-dummy-cached-token","async-dummy-cached-token",2071844086).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var cached_hints = new cljs.core.Keyword(null,"async-dummy-cached-hints","async-dummy-cached-hints",2060586441).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var ch = cljs.core.async.chan.call(null);if(lt.plugins.autocompleter.core.should_hint_QMARK_.call(null,ed))
{var temp__4090__auto___13559 = lt.plugins.autocompleter.async_dummy.maybe_cached_hints.call(null,token,cached_token,cached_hints);if(cljs.core.truth_(temp__4090__auto___13559))
{var hints_13560 = temp__4090__auto___13559;cljs.core.async.put_BANG_.call(null,ch,hints_13560);
} else
{lt.plugins.autocompleter.async_dummy.background_worker.call(null,ed,token,lt.plugins.autocompleter.async_dummy.store_ch.call(null,ed,ch));
}
return cljs.core.conj.call(null,channels,ch);
} else
{return channels;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.async-dummy","async-hints","lt.plugins.autocompleter.async-dummy/async-hints",1880154373),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.async_dummy.__BEH__async_hints,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Async dummy hints",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),null], null), null));
}

//# sourceMappingURL=autocompleter_compiled.js.map