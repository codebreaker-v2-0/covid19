const statesList = [
  {
    stateCode: "AN",
    stateName: "Andaman and Nicobar Islands",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932040/Group_7362andaman_vxld9l.png",
  },
  {
    stateCode: "AP",
    stateName: "Andhra Pradesh",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932039/Group_7438andhra_hcp5va.png",
  },
  {
    stateCode: "AR",
    stateName: "Arunachal Pradesh",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932042/Group_7340arunachal_hsw18y.png",
  },
  {
    stateCode: "AS",
    stateName: "Assam",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932042/Group_7341assam_igmxb4.png",
  },
  {
    stateCode: "BR",
    stateName: "Bihar",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932042/Group_7335bihar_rzoji3.png",
  },
  {
    stateCode: "CH",
    stateName: "Chandigarh",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932040/Group_7361chandi_kyuakh.png",
  },
  {
    stateCode: "CT",
    stateName: "Chhattisgarh",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932041/Group_7353chattis_th5fzv.png",
  },
  {
    stateCode: "DN",
    stateName: "Dadra and Nagar Haveli and Daman and Diu",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932039/Group_7357daman_yaogqt.png",
  },
  {
    stateCode: "DL",
    stateName: "Delhi",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932039/Group_7358delhi_yxylrm.png",
  },
  {
    stateCode: "GA",
    stateName: "Goa",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932042/Group_7349goa_rbepbk.png",
  },
  {
    stateCode: "GJ",
    stateName: "Gujarat",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932042/Group_7337gujrat_qltolu.png",
  },
  {
    stateCode: "HR",
    stateName: "Haryana",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932043/Group_7332haryana_jaedi5.png",
  },
  {
    stateCode: "HP",
    stateName: "Himachal Pradesh",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932043/Group_7364himachal_j4qsf5.png",
  },
  {
    stateCode: "JK",
    stateName: "Jammu and Kashmir",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932043/Group_7328jammu_tlbeup.png",
  },
  {
    stateCode: "JH",
    stateName: "Jharkhand",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932042/Group_7342jharkhand_yajtuy.png",
  },
  {
    stateCode: "KA",
    stateName: "Karnataka",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932040/Group_7339karnataka_efxv9b.png",
  },
  {
    stateCode: "KL",
    stateName: "Kerala",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932040/Group_7355kerala_isfc65.png",
  },
  {
    stateCode: "LA",
    stateName: "Ladakh",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932039/Group_7363ladakh_y6kt2y.png",
  },
  {
    stateCode: "LD",
    stateName: "Lakshadweep",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932039/Group_7359laksh_wdkgto.png",
  },
  {
    stateCode: "MH",
    stateName: "Maharashtra",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932040/Group_7350mahar_wbiyrc.png",
  },
  {
    stateCode: "MP",
    stateName: "Madhya Pradesh",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932042/Group_7336madhya_fxh64l.png",
  },
  {
    stateCode: "MN",
    stateName: "Manipur",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932041/Group_7346manipur_bp0wh6.png",
  },
  {
    stateCode: "ML",
    stateName: "Meghalaya",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932042/Group_7344meghalaya_iz2wdc.png",
  },
  {
    stateCode: "MZ",
    stateName: "Mizoram",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932041/Group_7347mizoram_f8vrqi.png",
  },
  {
    stateCode: "NL",
    stateName: "Nagaland",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932041/Group_7345nagaland_govovf.png",
  },
  {
    stateCode: "OR",
    stateName: "Odisha",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932041/Group_7348orissa_heniae.png",
  },
  {
    stateCode: "PY",
    stateName: "Puducherry",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932039/Group_7360puducherry_xsq4wb.png",
  },
  {
    stateCode: "PB",
    stateName: "Punjab",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932043/Group_7330punjab_io57hm.png",
  },
  {
    stateCode: "RJ",
    stateName: "Rajasthan",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932043/Group_7333rajasthan_ekzql9.png",
  },
  {
    stateCode: "SK",
    stateName: "Sikkim",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932042/Group_7338sikkim_ytjahm.png",
  },
  {
    stateCode: "TN",
    stateName: "Tamil Nadu",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932040/Group_7356tamil_qzofwv.png",
  },
  {
    stateCode: "TG",
    stateName: "Telangana",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932040/Group_7351telangana_uosf9q.png",
  },
  {
    stateCode: "TR",
    stateName: "Tripura",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932041/Group_7352tripura_xskayq.png",
  },
  {
    stateCode: "UP",
    stateName: "Uttar Pradesh",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932042/Group_7334uttara_lzhl28.png",
  },
  {
    stateCode: "UT",
    stateName: "Uttarakhand",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932043/Group_7331uttarakhand_qdswom.png",
  },
  {
    stateCode: "WB",
    stateName: "West Bengal",
    imgUrl:
      "https://res.cloudinary.com/dojcknl66/image/upload/v1691932042/Group_7343bengal_if6nfb.png",
  },
];

export default statesList;
