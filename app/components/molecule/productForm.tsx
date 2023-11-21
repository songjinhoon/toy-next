'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import React, { FC, useCallback, useEffect } from 'react';
import CommonButton from '@/app/components/atom/button/commonButton';
import { Product } from '@/app/types/db';
import CommonInput from '@/app/components/atom/input/commonInput';
import useProduct from '@/app/hooks/useProduct';

interface Props {
  data: Product;
}

const ProductForm: FC<Props> = ({ data }) => {
  const { update } = useProduct();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Product>({
    mode: 'onBlur',
    defaultValues: {
      ...data,
    },
  });

  const _onSubmit: SubmitHandler<Product> = useCallback(
    async (data) => {
      await update(data);
      alert('complete');
    },
    [update],
  );

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form onSubmit={handleSubmit(_onSubmit)}>
      <CommonInput
        label={'id'}
        options={{
          register: register,
          disabled: true,
        }}
      ></CommonInput>
      <CommonInput
        label={'ProductName'}
        options={{
          register: register,
        }}
      ></CommonInput>
      <CommonInput
        label={'SupplierID'}
        options={{
          register: register,
        }}
      ></CommonInput>
      <CommonInput
        label={'CategoryID'}
        options={{
          register: register,
        }}
      ></CommonInput>{' '}
      <CommonInput
        label={'QuantityPerUnit'}
        options={{
          register: register,
        }}
      ></CommonInput>
      <CommonButton type={'submit'} text={'Update'}></CommonButton>
    </form>
  );
};

export default ProductForm;
