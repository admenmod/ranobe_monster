import { useState } from 'react';
import type { Fn } from '@/ver/helpers';


type _F = (this: any, ...args: any) => Promise<any>;

interface IBase<F extends _F> {
	(this: Fn.T<F>, ...args: Fn.A<F>): Fn.R<F>;
}
interface IIdle<F extends _F> extends IBase<F> {
	status: 'idle';
	data: void;
	error: void;
	isIdle: true;
	isPending: false;
	isSuccess: false;
	isError: false;
	isResolved: false;
}
interface IPending<F extends _F> extends IBase<F> {
	status: 'pending';
	data: Awaited<Fn.R<F>> | void;
	error: unknown | void;
	isIdle: false;
	isPending: true;
	isSuccess: false;
	isError: false;
	isResolved: false;
}
interface ISuccess<F extends _F> extends IBase<F> {
	status: 'success';
	data: Awaited<Fn.R<F>>;
	error: unknown | void;
	isIdle: false;
	isPending: false;
	isSuccess: true;
	isError: false;
	isResolved: true;
}
interface IError<F extends _F> extends IBase<F> {
	status: 'error';
	data: Awaited<Fn.R<F>> | void;
	error: unknown;
	isIdle: false;
	isPending: false;
	isSuccess: false;
	isError: true;
	isResolved: true;
}

type Result<F extends _F> = IIdle<F> | IPending<F> | ISuccess<F> | IError<F>;


export const useAsync = <F extends (this: any, ...args: any) => Promise<any>>(fn: F, p: {
	onpending?: (this: Fn.T<F>, ...args: Fn.A<F>) => void;
	onerror?: (this: Fn.T<F>, ...args: Fn.A<F>) => void;
	onsuccess?: (this: Fn.T<F>, ...args: Fn.A<F>) => void;
} = {}) => {
	const [data, setData] = useState<Awaited<Fn.R<F>>>();
	const [error, setError] = useState<unknown>();
	const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');

	return Object.assign(function(this: Fn.T<F>, ...args: Fn.A<F>) {
		if(status === 'pending') return;

		setStatus('pending');

		const promise = fn.apply(this, args);
		p.onpending?.apply(this, args);

		promise.then(data => {
			setData(data);
			setStatus('success');
			p.onsuccess?.apply(this, args);
		}).catch(err => {
			setError(err);
			setStatus('error');
			p.onerror?.apply(this);
		});
	}, {
		status, data, error,
		isIdle: status === 'idle',
		isPending: status === 'pending',
		isSuccess: status === 'success',
		isError: status === 'error',
		isResolved: status === 'success' || status === 'error'
	}) as Result<F>;
};
