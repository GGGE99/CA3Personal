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
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
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
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;
import security.UserPrincipal;
import utils.EMF_Creator;
import utils.HttpUtils;
import utils.WeatherImagesMap;

@Path("weather")
public class WeatherEndpoint {

    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory();
    private static final UserFacade FACADE = UserFacade.getUserFacade(EMF);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
    private static final Map<String, String> map = new WeatherImagesMap().getMap();
    @Context
    private UriInfo context;

    @Context
    SecurityContext securityContext;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getInfoForAll() {
        return "{\"msg\":\"Hello anonymous\"}";
    }

    @GET
    @Path("/{lat}/{lon}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getWeather(@PathParam("lat") double lat, @PathParam("lon") double lon) throws IOException {
        JsonObject obj = GSON.fromJson(HttpUtils.fetchData("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=" + lat + "&lon=" + lon), JsonObject.class);
        JsonObject properties = new JsonObject();
        JsonObject data = obj.getAsJsonObject("properties").getAsJsonArray("timeseries").get(0).getAsJsonObject();

        properties.add("meta", obj.getAsJsonObject("properties").getAsJsonObject("meta").getAsJsonObject("units"));
        properties.add("details", data.getAsJsonObject("data").getAsJsonObject("instant").getAsJsonObject("details"));
        return properties.toString();
    }

    @GET
    @Path("/all/{lat}/{lon}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getWeatherAll(@PathParam("lat") double lat, @PathParam("lon") double lon) throws IOException {
        JsonObject returnObj = new JsonObject();
        JsonObject obj = GSON.fromJson(HttpUtils.fetchData("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=" + lat + "&lon=" + lon), JsonObject.class);
        JsonArray retObj = obj.getAsJsonObject("properties").getAsJsonArray("timeseries");
//        arr.remove(0);
//        returnObj.add("times", arr);
        return retObj.toString();
    }

    @GET
    @Path("/images")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllImages(@PathParam("lat") double lat, @PathParam("lon") double lon) throws IOException {
        
        return GSON.toJson(map);
    }

}
