import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import MarketWriteUI from "./MarketWrite.presenter";
import * as yup from "yup";
import { IFormData, IMarketWriteProps } from "./MarketWrite.types";
import { useApolloClient, useMutation } from "@apollo/client";
import {
  CREATE_USEDITEM,
  FETCH_USED_ITEMS,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./MarketWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useEffect, useRef, useState } from "react";
import { Address } from "react-daum-postcode";

declare const window: typeof globalThis & {
  kakao: any;
};

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  remarks: yup.string().required("상품 한줄요약을 입력해주세요."),
  contents: yup
    .string()
    .max(1000, "내용은 1000자 이내로 입력해주세요.")
    .required("상품내용을 입력해주세요."),
  price: yup
    .string()
    .matches(/^[0-9]+$/, "숫자만 입력해주세요.")
    .required("상품가격을 입력해주세요."),
});

export default function MarketWrite(props: IMarketWriteProps) {
  const { register, handleSubmit, formState, trigger, setValue } =
    useForm<IFormData>({
      resolver: yupResolver(schema),
      mode: "onChange",
      defaultValues: {
        name: props.data?.fetchUseditem.name
          ? props.data?.fetchUseditem.name
          : "",
        remarks: props.data?.fetchUseditem.remarks
          ? props.data?.fetchUseditem.remarks
          : "",
        contents: props.data?.fetchUseditem.contents
          ? props.data?.fetchUseditem.contents
          : "",
        price: props.data?.fetchUseditem.price
          ? Number(props.data?.fetchUseditem.price)
          : 0,
        zipcode: props.data?.fetchUseditem.useditemAddress?.zipcode
          ? props.data?.fetchUseditem.useditemAddress?.zipcode
          : "",
        address: props.data?.fetchUseditem.useditemAddress?.address
          ? props.data?.fetchUseditem.useditemAddress?.address
          : "",
        addressDetail: props.data?.fetchUseditem.useditemAddress?.addressDetail
          ? props.data?.fetchUseditem.useditemAddress?.addressDetail
          : "",
      },
    });
  const client = useApolloClient();
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [mapAddress, SetMapAddress] = useState(
    "제주특별자치도 제주시 첨단로 242"
  );
  const [imageUrls, setImageUrls] = useState([
    props.data?.fetchUseditem.images ? props.data?.fetchUseditem.images[0] : "",
    props.data?.fetchUseditem.images ? props.data?.fetchUseditem.images[1] : "",
    props.data?.fetchUseditem.images ? props.data?.fetchUseditem.images[2] : "",
  ]);
  const [files, setFiles] = useState<File[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFileUrls = (fileUrl: string, file: File, index: number) => {
    const tempUrls = [...imageUrls];
    tempUrls[index] = fileUrl;
    setImageUrls(tempUrls);

    const tempFiles = [...files];
    tempFiles[index] = file;
    setFiles([...tempFiles]);
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);

    void trigger("contents");
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c25b3dc8df9e973c15e09841afb0c4e6&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(mapAddress, function (result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            const marker = new window.kakao.maps.Marker({
              map,
              position: coords,
            });

            marker.setMap(map);
            map.setCenter(coords);
          }
        });
      });
    };
  }, [mapAddress]);

  const onClickSubmit = async (data: IFormData) => {
    const results = await Promise.all(
      files.map(
        async (el) => el && (await uploadFile({ variables: { file: el } }))
      )
    );

    const resultUrls = results.map((el) =>
      el.data ? el.data?.uploadFile.url : ""
    );

    try {
      await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            useditemAddress: {
              zipcode: data.zipcode,
              address: data.address,
              addressDetail: data.addressDetail,
            },
            images: resultUrls,
          },
        },
        refetchQueries: [{ query: FETCH_USED_ITEMS }],
      });
      Modal.success({ content: "상품등록에 성공하셨습니다." });
      void router.push("/markets");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickEdit = async (data: IFormData) => {
    const results = await Promise.all(
      files.map(
        async (el) => el && (await uploadFile({ variables: { file: el } }))
      )
    );

    const resultUrls: Array<string | undefined> = props.data?.fetchUseditem
      .images
      ? [...props.data?.fetchUseditem.images]
      : [];

    results.forEach(
      (el, index) =>
        (resultUrls[index] = el ? el.data?.uploadFile.url : resultUrls[index])
    );

    try {
      await client.mutate<
        Pick<IMutation, "updateUseditem">,
        IMutationUpdateUseditemArgs
      >({
        mutation: UPDATE_USED_ITEM,
        variables: {
          useditemId: String(router.query.marketId),
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            useditemAddress: {
              zipcode: data.zipcode,
              address: data.address,
              addressDetail: data.addressDetail,
            },
            images: resultUrls.map((el) => (el === undefined ? "" : el)),
          },
        },
        refetchQueries: [{ query: FETCH_USED_ITEMS }],
      });
      Modal.success({ content: "상품수정에 성공하셨습니다." });
      void router.push("/mypages/mymarket/myitems");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = async (data: Address) => {
    setValue("zipcode", data.zonecode);
    setValue("address", data.address);

    await trigger("zipcode");
    await trigger("address");
    SetMapAddress(data.address);
    onToggleModal();
  };

  return (
    <MarketWriteUI
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onToggleModal={onToggleModal}
      isOpen={isOpen}
      onCompleteAddressSearch={onCompleteAddressSearch}
      imageUrls={imageUrls}
      fileRef={fileRef}
      onChangeFileUrls={onChangeFileUrls}
      data={props.data}
      isEdit={props.isEdit}
    />
  );
}
