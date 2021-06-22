

const createAction = (type, payload = {}) => ({ type, payload });

export const  downloadFormsAction = 'forms/download';
export const downloadFormsSuccessAction = 'forms/download_success';

export const downloadForms = () => createAction(downloadFormsAction);
export const downloadFormsSuccess = (payload) => createAction(downloadFormsSuccessAction, { payload });