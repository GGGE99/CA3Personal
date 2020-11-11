package rest;

import DTOs.UserDTO;
import DTOs.UserInfoDTO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import entities.User;
import entities.UserInfo;
import errorhandling.InvalidInputException;
import facades.UserFacade;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.security.RolesAllowed;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;
import security.UserPrincipal;
import utils.EMF_Creator;

@Path("user")
public class UserEndpoint {

    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory();
    private static final UserFacade FACADE = UserFacade.getUserFacade(EMF);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @Context
    private UriInfo context;

    @Context
    SecurityContext securityContext;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getInfoForAll() {
        return "{\"msg\":\"Hello anonymous\"}";
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String make(String user) throws InvalidInputException {
        List<String> roles = new ArrayList();
        roles.add("user");
        UserDTO userDTO = GSON.fromJson(user, UserDTO.class);
        userDTO = new UserDTO(userDTO.getName(), userDTO.getPassword(), roles);
        userDTO = FACADE.addUser(userDTO);

        return GSON.toJson(userDTO);
    }

    @POST
    @Path("info")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @RolesAllowed({"admin", "user"})
    public String makeUserInfo(String userInfoString) throws InvalidInputException {
        String thisuser = securityContext.getUserPrincipal().getName();
        UserInfoDTO userInfoDTO = GSON.fromJson(userInfoString, UserInfoDTO.class);
        EntityManager em = EMF.createEntityManager();
        System.out.println(thisuser);
        User user = null;

        try {
            TypedQuery<User> query = em.createQuery("SELECT u FROM User u WHERE u.userName = :userName", User.class);
            query.setParameter("userName", thisuser);
            user = query.getSingleResult();
            UserInfo userInfo = user.getUserInfo();

            if (userInfo == null) {
                userInfo = new UserInfo();
                user.setUserInfo(userInfo);
            }

            userInfo.setInfo(userInfoDTO);
            em.getTransaction().begin();
            em.persist(user);
            em.getTransaction().commit();
        } catch (Exception e) {

        }

        return GSON.toJson(new UserDTO(user));
    }
}