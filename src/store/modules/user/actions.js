export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}

export function addAccountRequest(profile) {
  return {
    type: '@auth/ADD_ACCOUNT_REQUEST',
    payload: { profile },
  };
}

export function addAccountFinished() {
  return {
    type: '@auth/ADD_ACCOUNT_FINISHED',
  };
}
