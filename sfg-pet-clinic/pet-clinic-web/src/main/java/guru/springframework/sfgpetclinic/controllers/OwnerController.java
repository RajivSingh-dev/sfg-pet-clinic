package guru.springframework.sfgpetclinic.controllers;

import guru.springframework.sfgpetclinic.services.OwnerService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class OwnerController
{


    @GetMapping({"/owners","/index.html"})
    public String listOwners()
    {
        return "owners/ownersList";
    }

    @GetMapping({"/find"})
    public String findOwners()
    {
        return "owners/findOwners";
    }

    @GetMapping({"/ownerDetails"})
    public String getOwnerDetailsById()
    {
        return "owners/ownerDetails";
    }

}
