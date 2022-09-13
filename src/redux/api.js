let dict = {
  auth: {
    LOGIN: {
      api: "/api/auth/login",
    },
    REGISTER: {
      api: "/api/auth/register",
    },
    FORGOT_PASSWORD: {
      api: "/api/auth/forgot_password",
    },
    FORGOT_PASSWORD: {
      api: "/api/auth/forgot_password",
    },
    VERIFICATION: {
      api: "/api/auth/verification",
    },
    PASSWORD_RESET: {
      api: "/api/auth/password_reset",
    },
    LOAD_USER: {
      api: "/api/auth/load_user",
    },
    UPDATE_USER: {
      api: "/api/auth/update",
    },
  },
  create: {
    searched_place: {
      api: "/api/search/place",
    },
    create_event: {
      api: "/api/hosting/event/create",
    },
    quick_event: {
      api: "/api/hosting/quick/event",
    },
    event: {
      api: "/api/hosting/event/update",
    },
    event_item: {
      api: "/api/hosting/event/item/edit",
    },
    plans: {
      api: "/api/plans/event",
    },
  },
  read: {
    plans: {
      api: "/api/plans/event",
    },
    profile_availability: {
      api: "/api/auth/profile/availability",
    },
    progress: {
      api: "/api/progress/read",
    },
    event_list: {
      api: "/api/event/list",
    },
    event_detail: {
      api: "/api/event/detail",
    },
    hosting: {
      api: "/api/hosting/event/list",
    },
  },
  update: {
    progress: {
      api: "/api/progress/update",
    },
  },
  drop: {},
  quick: {},
  indie: {
    upload_image_link: process.env.REACT_APP_SERVER + "/papi/upload/file",
  },
};

export default function option(target, key, callback) {
  let output = dict[target][key] || {};
  if (callback) {
    callback(output);
  }
  return output;
}
